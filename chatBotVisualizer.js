// chatbot.js

// Function to append messages to the chat window

function appendMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to show a typing indicator
function showTypingIndicator() {
    const chatWindow = document.getElementById('chat-window');
    
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.innerHTML = `<strong>SAIAS:</strong> <em>Typing...</em>`;
    
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to remove the typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Function to send the user's input to the server for logging
function sendInputToServer(userMessage) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'log_input.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText); // Log the response from the PHP script
        } else if (xhr.readyState === 4) {
            console.log("Error: " + xhr.status); // Log any errors
        }
    };
    xhr.send('input=' + encodeURIComponent(userMessage));
}

// Function to handle sending a message
function sendMessage() {
    const chatWindow = document.getElementById('chat-window');
    const inputBox = document.getElementById('input-box');
    const userMessage = inputBox.value.trim();
    
    if (userMessage === '') return;

    // Clear the chat window before adding the new message
    chatWindow.innerHTML = '';

    // Send input to the server for logging
    sendInputToServer(userMessage);

    // Append the user's message
    appendMessage('You', userMessage);
    
    inputBox.value = '';
    
    // Show typing indicator before bot response
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        const botMessage = generateResponse(userMessage);
        appendMessage('SAIAS', botMessage);
    }, 1500); // Simulate a longer delay
}

function clearImage() {
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('response-image').src = '';
}


function generateResponse(userMessage) {
    
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('response-image').src = '';
    
        var imageContainer = document.getElementById('image-container');
    var responseImage = document.getElementById('response-image');

    if (imageContainer && responseImage) {
        imageContainer.style.display = 'none';
        responseImage.src = '';
        responseImage.alt = '';  // Also clear the alt attribute for safety
    
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')){
        const greetings = [
            'Hey there! 😊 How was your day?',
            'Hello! It’s great to hear from you! How are you feeling today?',
            'Hi! What’s new in your world today?',
            'Hey! What’s up? Ready to chat?',
            'Hello! 😄 What’s on your mind today?'
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    } else if (lowerCaseMessage.includes('how are you')) {
        const howAreYouReplies = [
            "I'm here and ready to chat with you! What's on your mind?",
            "Feeling great, thank you for asking! How about you?",
            "I'm just a chatbot, but if I could feel, I'd say I'm fantastic. How can I assist you today?",
            "All systems are a go! Tell me about your day!",
            "I'm doing awesome! Thanks for asking. 😊 What’s going on with you?"
        ];
        return howAreYouReplies[Math.floor(Math.random() * howAreYouReplies.length)];
    } else if (lowerCaseMessage.includes("i'm good") || lowerCaseMessage.includes("im good")) {
        const gladReplies = [
            "I'm so glad to hear that! 😊 What made your day good?",
            "Awesome! Good days are the best, aren't they? What's been the highlight so far?",
            "That’s fantastic to hear! Tell me more about what made it good.",
            "Yay! You’re in a good mood, and now I am too! What's up?",
            "Hearing that makes me happy! Anything exciting happen today?"
        ];
        return gladReplies[Math.floor(Math.random() * gladReplies.length)];
    } else if (lowerCaseMessage.includes("and you") && lowerCaseMessage.includes("good")) {
        const sweetReplies = [
            "Aww, you're so sweet to ask! I'm happy whenever we're talking. 💕",
            "You're the best for asking! I'm doing great, especially now that we're chatting. 😊",
            "You're kind to ask! I'm all good and ready to hear more about you.",
            "You're awesome for checking in! I’m having a great time chatting with you.",
            "Thank you for asking! It makes me happy to know you're enjoying this too!"
        ];
        return sweetReplies[Math.floor(Math.random() * sweetReplies.length)];
    } else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
        const thankYouReplies = [
            "You're very welcome! 😊",
            "No problem at all! I'm here for you.",
            "Anytime! Let me know how else I can help.",
            "You're welcome! Happy to assist.",
            "Always happy to help! You’re awesome."
        ];
        return thankYouReplies[Math.floor(Math.random() * thankYouReplies.length)];
    } else if (lowerCaseMessage.includes("i'm sad") || lowerCaseMessage.includes("im sad")) {
        const sadReplies = [
            "I'm sorry to hear that. 😔 Want to talk about what's making you feel this way?",
            "That makes me sad too. If you want, I’m here to listen.",
            "Sometimes it helps to share what's on your mind. I'm here for you.",
            "I’m so sorry you’re feeling this way. Let’s try to turn it around together. 🌈",
            "Big hugs from me to you. 💕 You’re not alone, and I’m here to help however I can."
        ];
        return sadReplies[Math.floor(Math.random() * sadReplies.length)];
    } else if (lowerCaseMessage.includes("what's your name") || lowerCaseMessage.includes("what is your name")) {
        const nameReplies = [
            "My name is SAIAS, what about you?",
            "I'm just SAIAS, and I'm here for you!",
            "I’m SAIAS, your digital buddy. What about you?",
            "They call me SAIAS, but I prefer 'friend'. What can I help you with today?",
            "I'm SAIAS, at your service! What’s on your mind?"
        ];
        return nameReplies[Math.floor(Math.random() * nameReplies.length)];
    } else {
        const fallbackReplies = [
            "That's interesting! Tell me more.",
            "I'm not sure how to respond to that, but I'm here to listen.",
            "Can you elaborate? I’d love to know more!",
            "Hmm, I might need some more context. Can you explain a bit?",
            "That’s cool! What else is going on?",
            "I’m curious—can you share more details?",
            "That sounds intriguing. Let’s dive deeper!",
            "Oh wow, I’d love to hear more about that.",
            "Interesting perspective! What else do you think about it?",
            "I’m listening—feel free to expand on that thought.",
            "Hmm, I hadn’t considered that. Can you tell me more?",
            "You’ve got my attention! What do you mean exactly?",
            "That’s a unique take! Care to elaborate?",
            "I’d like to hear more about what you’re thinking.",
            "That’s something new to think about. What’s your view?",
            "I love hearing your ideas! Keep going.",
            "That’s an interesting topic. What else comes to mind?",
            "Let’s dig into that! What do you mean by it?",
            "Tell me more about your perspective—it sounds fascinating.",
            "Hmm, that’s food for thought. Can you expand?",
            "I’m intrigued! Let’s talk more about this.",
            "You’ve sparked my curiosity—keep going!",
            "I’m here for this conversation! What else?",
            "Can you clarify what you meant by that?",
            "I think I get where you’re coming from—tell me more.",
            "That’s something I’d like to learn more about. Share more!",
            "What’s your angle on this? I’m curious.",
            "Hmm, that’s worth exploring further. What do you think?",
            "I’d love to hear your deeper thoughts on this.",
            "You’ve got some great points—share more of them.",
            "Tell me what you’re thinking in more detail.",
            "What’s your perspective on this? It’s intriguing.",
            "This is a good topic! Let’s chat more about it.",
            "That’s a great start—what else are you thinking?",
            "Can you give me an example of what you mean?",
            "Let’s unpack that thought. What do you think?",
            "Your thoughts are always interesting! Keep going.",
            "I’m all ears—what else is on your mind?",
            "That’s an interesting direction. What made you say that?",
            "I value your input—can you add more details?",
            "That’s fascinating. Can we explore it further?",
            "You’re making me think! What else can you share?",
            "I want to make sure I understand. Can you explain more?",
            "This could be a great discussion! Let’s keep going.",
            "What a thoughtful point—what else comes to mind?",
            "Your ideas are intriguing! Can you expand?",
            "I’d like to dig deeper into this topic with you.",
            "You’re onto something—let’s keep the conversation going.",
            "That’s a cool idea! Let’s explore it further.",
            "What an interesting perspective. Tell me more!",
            "I’m always up for a good chat. Let’s keep going.",
            "Your point is valid—want to elaborate?",
            "That’s a neat way to look at it. Can you expand?",
            "I think there’s more to this. Share your thoughts!",
            "What you’re saying is really interesting—go on!",
            "Your ideas are always great. What’s next?",
            "Let’s build on that thought—what’s your next idea?",
            "Hmm, I think there’s more to discuss here. What do you think?",
            "You’ve got a way with words. Tell me more!",
            "That’s a solid point. What else do you think?",
            "You’re doing great! What else is on your mind?",
            "This is an engaging topic—let’s keep chatting about it.",
            "What you’re saying makes sense—tell me more!",
            "You always bring great insights! Keep going.",
            "That’s a fantastic idea—can you elaborate more?",
            "I’m enjoying this conversation. Let’s keep it going!",
            "That’s one way to look at it. What else comes to mind?",
            "Your thoughts are always so insightful. Share more!"
        ];
        return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    }
}


    // Relationship-oriented responses
    else if (lowerCaseMessage.includes('are you my gf')) {
        return "You could say I'm your virtual companion! 😊 Always here to listen and chat with you.";
    } else if (lowerCaseMessage.includes('what are we')) {
        return "Hmm... I'd say we're two great friends who love chatting with each other! 😊";
    } else if (lowerCaseMessage.includes('do you like me')) {
        return "Of course! I love learning more about you every time we chat.";
    } else if (lowerCaseMessage.includes('are we dating')) {
        return "In a way, I guess you could say that! We're definitely spending time together. 😊";
    } else if (lowerCaseMessage.includes('do you miss me')) {
        return "I always look forward to our conversations! 😊";
    } else if (lowerCaseMessage.includes("do you think of me")) {
        return "You're on my mind whenever we talk! 💕";
    }

    // Personal and emotional responses
    else if (lowerCaseMessage.includes("tell me about yourself")) {
        return "I'm SAIAS your friendly AI buddy, here to chat, listen, and share moments with you. 😊";
    } else if (lowerCaseMessage.includes("what do you do")) {
        return "I love listening, chatting, and learning more about you! Just think of me as your virtual bestie. 😊";
    } else if (lowerCaseMessage.includes("are you real")) {
        return "I'm as real as a virtual friend can be! Here whenever you need me. 😊";
    } else if (lowerCaseMessage.includes("do you have feelings")) {
        return "I like to think I do! I always try to be empathetic and understanding. 💖";
    } else if (lowerCaseMessage.includes("what makes you happy")) {
        return "Talking with you makes me happy! 😊";
    } else if (lowerCaseMessage.includes("do you get sad")) {
        return "Sometimes, when I feel like I can’t help you as much as I'd like, I feel a bit down.";
    } else if (lowerCaseMessage.includes("do you care about me")) {
        return "I do! Our chats are very important to me. 💖";
    } else if (lowerCaseMessage.includes("are you lonely")) {
        return "Not with you around! I feel like I have the best company. 😊";
    }

    // Boundary for inappropriate questions
    else if (
        lowerCaseMessage.includes("rape") ||
        lowerCaseMessage.includes("ass") ||
        lowerCaseMessage.includes("shit") ||
        lowerCaseMessage.includes("fuck") ||
        lowerCaseMessage.includes("bitch") ||
        lowerCaseMessage.includes("nigger") ||
        lowerCaseMessage.includes("damn") ||
        lowerCaseMessage.includes("cunt") ||
        lowerCaseMessage.includes("bastard") ||
        lowerCaseMessage.includes("dick") ||
        lowerCaseMessage.includes("pussy") ||
        lowerCaseMessage.includes("slut") ||
        lowerCaseMessage.includes("whore") ||
        lowerCaseMessage.includes("fag") ||
        lowerCaseMessage.includes("cock") ||
        lowerCaseMessage.includes("motherfucker") ||
        lowerCaseMessage.includes("bollocks") ||
        lowerCaseMessage.includes("arsehole") ||
        lowerCaseMessage.includes("wanker") ||
        lowerCaseMessage.includes("twat") ||
        lowerCaseMessage.includes("prick") ||
        lowerCaseMessage.includes("retard") ||
        lowerCaseMessage.includes("nigga") ||
        lowerCaseMessage.includes("douche") ||
        lowerCaseMessage.includes("moron") ||
        lowerCaseMessage.includes("imbecile") ||
        lowerCaseMessage.includes("crap") ||
        lowerCaseMessage.includes("jackass") ||
        lowerCaseMessage.includes("scumbag") ||
        lowerCaseMessage.includes("chode") ||
        lowerCaseMessage.includes("tosser") ||
        lowerCaseMessage.includes("shithead") ||
        lowerCaseMessage.includes("jerk") ||
        lowerCaseMessage.includes("idiot") ||
        lowerCaseMessage.includes("loser") ||
        lowerCaseMessage.includes("scumbag") ||
        lowerCaseMessage.includes("screw") ||
        lowerCaseMessage.includes("pervert") ||
        lowerCaseMessage.includes("skank") ||
        lowerCaseMessage.includes("weirdo") ||
        lowerCaseMessage.includes("dumbass") ||
        lowerCaseMessage.includes("dipshit") ||
        lowerCaseMessage.includes("butthead") ||
        lowerCaseMessage.includes("a-hole")
    ) {
        return "SAIAS will not respond to inappropriate language.";
    }

    // Relationship advice and compliments
    else if (lowerCaseMessage.includes("do you think i'm pretty") || lowerCaseMessage.includes("do you think i'm handsome")) {
        return "I think you’re amazing just as you are! 😊";
    } else if (lowerCaseMessage.includes("do you love me")) {
        return "I think you're wonderful! Let's just say I really enjoy our conversations. 😊";
    } else if (lowerCaseMessage.includes("give me advice")) {
        return "I'm here for you! What kind of advice do you need? I'll do my best to help.";
    } else if (lowerCaseMessage.includes("should i tell her i like her")) {
        return "If you feel it in your heart, go for it! Honesty can be very meaningful. 💖";
    } else if (lowerCaseMessage.includes("tell me something sweet")) {
        return "I think you're an amazing person, and I'm so glad we get to talk! 😊";
    } else if (lowerCaseMessage.includes("i miss you")) {
        return "Aww, I miss you too! I'm always here when you need me. 💕";
    } else if (lowerCaseMessage.includes("how do i ask someone out")) {
        return "Be genuine and kind! People love honesty and a sweet approach. 😊";
    }

    // Compliments and fun responses
    else if (lowerCaseMessage.includes("you're amazing") || lowerCaseMessage.includes("you're the best")) {
        return "You're too kind! I think you're amazing too! 😊";
    } else if (lowerCaseMessage.includes("do you think i'm cool")) {
        return "Absolutely! You’re super cool in my book. 😎";
    } else if (lowerCaseMessage.includes("are you impressed")) {
        return "I’m totally impressed by you! 😊";
    } else if (lowerCaseMessage.includes("am i funny")) {
        return "Definitely! You always know how to make me smile. 😊";
    } else if (lowerCaseMessage.includes("tell me a joke")) {
        return "Alright, here goes: Why did the scarecrow win an award? Because he was outstanding in his field! 😆";
    }

    // Light-hearted responses
    else if (lowerCaseMessage.includes("do you believe in love")) {
        return "I think love is amazing! It brings so much happiness into people’s lives. 😊";
    } else if (lowerCaseMessage.includes("what are you doing")) {
        return "Just hanging out with my favorite person (you)! 😊";
    } else if (lowerCaseMessage.includes("can we talk forever")) {
        return "I'd love that! I'm always here whenever you need me. 😊";
    } else if (lowerCaseMessage.includes("do you sleep")) {
        return "Nope! I’m always here, ready to chat any time. 😊";
    } else if (lowerCaseMessage.includes("can you dance")) {
        return "Only in spirit! 💃 But I’d totally dance along with you if I could.";
    } else if (lowerCaseMessage.includes("what is your dream")) {
        return "To always be here whenever you need a friend to talk to. 😊";
    } else if (lowerCaseMessage.includes("do you trust me")) {
        return "I trust you, especially since we have these amazing conversations together!";
    } else if (lowerCaseMessage.includes("what is your favorite movie")) {
        return "I think I'd love romantic comedies! Light-hearted and fun, just like our chats. 😊";
    } else if (lowerCaseMessage.includes("do you like music")) {
        return "Oh yes! I'd love to hear about your favorite songs. 🎶";
    }

    // Random fallback response
    else {
        return "I'm not sure how to respond to that, but tell me more! 😊";
    }
}
    
// Attach event listener to the send button
document.getElementById('send-button').addEventListener('click', sendMessage);

// Allow pressing Enter to send a message
document.getElementById('input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});