document.getElementById("generateAd").addEventListener("click", async function() {
    let input = document.getElementById("adInput").value;
    if (!input.trim()) {
        alert("Please enter product details!");
        return;
    }

    let response = await fetch("http://localhost:5000/generate-ad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productDetails: input })
    });

    let data = await response.json();
    document.getElementById("adOutput").innerText = data.adCopy || "Error generating ad";
});

document.getElementById("sendMessage").addEventListener("click", async function() {
    let phone = document.getElementById("phoneNumber").value;
    let email = document.getElementById("emailAddress").value;
    let message = document.getElementById("message").value;

    if (!message.trim() || (!phone.trim() && !email.trim())) {
        alert("Please enter a valid message and at least a phone number or email.");
        return;
    }

    let response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: phone, emailAddress: email, message })
    });

    let data = await response.json();
    alert(data.success ? "Message sent successfully!" : "Failed to send message.");
});
