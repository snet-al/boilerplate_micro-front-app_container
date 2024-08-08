function sendMessage() {
    const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

if (userInput.value.trim() !== "") {
    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user-message';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Clear the user's input
    userInput.value = "";

    // Add bot's response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot-message';
        botMessage.textContent = 'This is an automated response.';
        chatBox.appendChild(botMessage);
        
        // Scroll down to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}
}