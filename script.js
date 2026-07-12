const chatSend = document.getElementById('chatSend');
const chatBox = document.getElementById('chatBox');

chatSend.addEventListener('click', () => {
    const message = chatBox.value.trim();
    if (message) {
        // Send the message to the server or handle it as needed
        console.log('Message sent:', message);
        chatBox.value = ''; // Clear the input box after sending
    }
});