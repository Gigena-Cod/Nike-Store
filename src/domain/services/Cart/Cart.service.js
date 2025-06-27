class CartDatabase {
  constructor() {
    this.dbName = 'nike-cart-db';
    this.storeName = 'cart';
    this.version = 1;
    this.db = null;
  }

  async init() {
    const init = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = (event) => {
        reject(new Error('Database error: ' + event.target.error));
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };
    });

    return init;
  }

  async getAll() {
    const response = new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onerror = () => reject(new Error('Error getting cart items'));
      request.onsuccess = () => resolve(request.result || []);
    });

    return response;
  }

  async add(item) {
    const response = new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(item);

      request.onerror = () => reject(new Error('Error adding item to cart'));
      request.onsuccess = () => resolve(request.result);
    });

    return response;
  }

  async update(id, quantity) {
    const response = new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      store.get(id).onsuccess = (event) => {
        const item = event.target.result;
        if (item) {
          item.quantity = quantity;
          const updateRequest = store.put(item);
          updateRequest.onsuccess = () => resolve();
          updateRequest.onerror = () => reject(new Error('Error updating cart item'));
        } else {
          reject(new Error('Item not found in cart'));
        }
      };
    });

    return response;
  }

  async delete(id) {
    const response = new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onerror = () => reject(new Error('Error deleting cart item'));
      request.onsuccess = () => resolve();
    });

    return response;
  }
}

/**
 * Service to handle cart operations
 * @class
 */
export class CartService {
  constructor() {
    this.database = new CartDatabase();
  }

  async init() {
    await this.database.init();
  }

  /**
   * Get all products in cart
   * @returns {Promise<Array>} Array of cart items
   */
  async getAllProducts() {
    return this.database.getAll();
  }

  /**
   * Add product to cart
   * @param {Object} product - Product to add
   * @param {number} quantity - Quantity to add
   * @returns {Promise<number>} ID of the added item
   */
  async addProduct(product, quantity = 1) {    
    
    const cartItem = {
      ...product,
      quantity,
      createdAt: new Date().toISOString()
    };
    return this.database.add(cartItem);
  }

  /**
   * Update product quantity in cart
   * @param {number} productId - ID of the product to update
   * @param {number} quantity - New quantity
   * @returns {Promise<void>}
   */
  async updateProductQuantity(productId, quantity) {
    return this.database.update(productId, quantity);
  }

  /**
   * Remove product from cart
   * @param {number} productId - ID of the product to remove
   * @returns {Promise<void>}
   */
  async removeProduct(productId) {
    return this.database.delete(productId);
  }

  /**
   * Get total price of cart
   * @returns {Promise<number>} Total price
   */
  async getTotalPrice() {
    const response = await this.getAllProducts();
    return response.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Clear entire cart
   * @returns {Promise<void>}
   */
  async clearCart() {
    const response = new Promise((resolve, reject) => {
      const transaction = this.database.db.transaction([this.database.storeName], 'readwrite');
      const store = transaction.objectStore(this.database.storeName);
      const request = store.clear();

      request.onerror = () => reject(new Error('Error clearing cart'));
      request.onsuccess = () => resolve();
    });

    return response;
  }
}
