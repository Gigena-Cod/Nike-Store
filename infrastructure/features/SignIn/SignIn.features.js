/**
 * Sets a cookie with the specified name, value, and expiration days.
 * 
 * @param {string} name - The name of the cookie
 * @param {string} value - The value to store in the cookie
 * @param {number} days - Number of days until the cookie expires
 */
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

/**
 * Handles the form submission event.
 * 
 * @param {Event} e - The form submission event
 */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const validEmails = ['nahuel.gigena98@gmail.com', 'admin@gmail.com'];
    const validPassword = 'admin';
    const token = 'UMq2B4abp76i1q7iIAX0B0Fv0YVCOhaFPRgW7iyB53TjzuZ2xq4SkogWmwHfsmMD';

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            if (validEmails.includes(email) && password === validPassword) {

                setCookie('nike_token', token, remember ? 7 : 1);

                window.location.href = '../Home/Home.features.html';
            } else {
                alert('Credenciales inválidas. Por favor, intenta nuevamente.');
            }
        });
    }
});
