export function logout() {
    localStorage.removeItem('token'); // JWT 
    window.location.href = '/login'; // Redirect to login page
}