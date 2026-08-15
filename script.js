// Function to switch between Student and Faculty login views
function switchPortal(role) {
    const studentView = document.getElementById('studentView');
    const facultyView = document.getElementById('facultyView');

    if (role === 'faculty') {
        studentView.classList.add('hidden');
        facultyView.classList.remove('hidden');
    } else {
        facultyView.classList.add('hidden');
        studentView.classList.remove('hidden');
    }
}

// Function to handle form submissions and redirect to dashboards
function handleLogin(event, role) {
    event.preventDefault(); // Prevent page refresh
    let userId = '';

    if (role === 'student') {
        userId = document.getElementById('studentUserId').value;
    } else {
        userId = document.getElementById('facultyUser').value;
    }

    // Save session info
    sessionStorage.setItem('namizone_user', userId);
    sessionStorage.setItem('namizone_role', role);

    // Redirect based on role
    if (role === 'student') {
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'faculty-dashboard.html';
    }
}