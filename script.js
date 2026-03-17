const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    // 1. Stop the page from refreshing (the default HTML behavior)
    e.preventDefault();

    // 2. Collect the data from the form fields
    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value
    };

    try {
        // 3. Send the data to your Render backend
        const response = await fetch('https://rashmi-server.onrender.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Success: " + result.message);
            contactForm.reset(); // Clear the form
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("Could not connect to the server. Is it awake?");
    }
});