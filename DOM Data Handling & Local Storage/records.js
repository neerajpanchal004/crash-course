document.addEventListener('DOMContentLoaded', function() {
    const userRole = sessionStorage.getItem('userRole');
    const recordsTable = document.getElementById('recordsTable');

    // Display records table based on user role
    if (userRole === 'HR') {
        // Logic to display table with addition/deletion options
    } else if (userRole === 'Employee') {
        // Logic to display table with view-only access
    } else {
        alert('Invalid user role. Please login again.');
        window.location.href = 'login.html';
    }
});
