/**
 * Verifica si el usuario está autenticado
 * @returns {boolean} - true si está autenticado, false si no
 */
window.checkAuth = function() {
    return document.cookie.includes('nike_token=');
};

/**
 * Redirige a la página de inicio de sesión si no está autenticado
 */
window.redirectIfNotAuth = function() {
    if (!checkAuth()) {
        window.location.href = '../SignIn/SignIn.features.html';
    }
};
