document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form submission, e.g., using an API to send the data
    alert(`Thank you for your message, ${name}!`);
    
    // Reset the form fields
    this.reset();
});