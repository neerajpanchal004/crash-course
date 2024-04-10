document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails && formData.get('name') === storedUserDetails.name && formData.get('password') === storedUserDetails.password) {
        sessionStorage.setItem('userRole', storedUserDetails.role);
        alert('Login successful!');
        window.location.href = 'records.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
