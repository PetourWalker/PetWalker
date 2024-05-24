document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('password', document.getElementById('password').value);
    alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    window.location.href = 'index.html';
});