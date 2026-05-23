function handleContactSubmit() {
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let messageInput = document.getElementById("message").value;
    
    let feedbackElement = document.getElementById("formFeedback");

    if (nameInput === "" || emailInput === "" || messageInput === "") {
        feedbackElement.textContent = "Please fill out all fields before sending.";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.textContent = "Thanks for reaching out, " + nameInput + "! Your message has been simulated successfully.";
        feedbackElement.style.color = "#FF8000";
        
        console.log("New Message from: " + nameInput);
        console.log("Email: " + emailInput);
        console.log("Message: " + messageInput);
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}

let submitButton = document.getElementById("submitBtn");
submitButton.onclick = handleContactSubmit;