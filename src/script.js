document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const user = await response.json();
            console.log('Login successful:', user);

            // Setelah login berhasil, tampilkan token di HTML
            document.getElementById('loginResult').innerText = `Login successful. Token: ${user.authentication.sessionToken}`;
            window.location.href = 'index.html';
        } else {
            console.error('Login failed:', response.status);

            // Jika login gagal, tampilkan pesan error di HTML
            document.getElementById('loginResult').innerText = 'Login failed. Please check your credentials.';
        }
    } catch (error) {
        console.error('Error during login:', error);

        // Handle other errors, e.g., display an error message.
        document.getElementById('loginResult').innerText = 'Error during login. Please try again later.';
    }
});

