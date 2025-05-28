/**
 * Handles the form submission event.
 * 
 * @param {Event} e - The form submission event
 */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const validEmails = ['nahuel.gigena98@gmail.com', 'admin'];
    const validPassword = 'admin';
    const token = 'UMq2B4abp76i1q7iIAX0B0Fv0YVCOhaFPRgW7iyB53TjzuZ2xq4SkogWmwHfsmMD';

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            if (validEmails.includes(email) && password === validPassword) {

                const d = new Date();
                d.setTime(d.getTime() + (remember ? 7 : 1) * 24 * 60 * 60 * 1000);
                const expires = "expires=" + d.toUTCString();
                document.cookie = 'nike_token=' + token + ';' + expires + ';path=/';

                window.location.href = '../Home/Home.features.html';
            } else {
                alert('Credenciales inválidas. Por favor, intenta nuevamente.');
            }
        });
    }
});
