document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userDetails = {
        name: formData.get('name'),
        role: formData.get('role'),
        password: formData.get('password')
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Signup successful!');
    window.location.href = 'login.html';
});
