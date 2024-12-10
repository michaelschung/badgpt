const chatWindow = document.getElementById("chat_window");
const msgFeed = document.getElementById("message_feed");
const chatInputForm = document.getElementById("chat_input_form");
var ch = new Character();

// Onload - grab Character object from session storage
(function() {
    fetch("http://localhost:3000/api/get-character")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((character) => {
        console.log("Character data:", character);
        ch.decode(character);
        document.getElementById("connected_to").innerHTML = `
            You've been connected to ${ch.name}. Say hi!
        `;
    })
    .catch((error) => {
        console.error("Error fetching character data:", error);
    });
    document.getElementById("chat_input").focus();
})();

function newBubble(src, msg) {
    msgFeed.appendChild(textBubble(src, msg));
    // Scroll to bottom
    msgFeed.scrollTop = msgFeed.scrollHeight;
}

chatInputForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = chatInputForm.elements["chat_input"].value;
    document.getElementById("chat_input").value = "";
    newBubble("user", message);
    const response = await ch.chat(message);
    newBubble("comp", response);
    if (message.toLowerCase().includes("bye")) {
        document.getElementById("chat_input").disabled = true;
        newBubble("sys", `== ${ch.name} disconnected ==`);
    }
})