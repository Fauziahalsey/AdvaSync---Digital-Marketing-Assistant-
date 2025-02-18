const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(bodyParser.json());

// Route for generating ad copy
app.post("/generate-ad", (req, res) => {
    const { productDetails } = req.body;
    if (!productDetails) {
        return res.status(400).json({ error: "Product details are required." });
    }
    const generatedAd = `🔥 Boost your sales with: ${productDetails}! Order now! 🚀`;
    res.json({ adCopy: generatedAd });
});

// Route for sending SMS & Email (Dummy Response)
app.post("/send-message", (req, res) => {
    const { phoneNumber, emailAddress, message } = req.body;

    if (!message || (!phoneNumber && !emailAddress)) {
        return res.status(400).json({ error: "Phone or email & message required." });
    }

    res.json({ success: true, message: "Message sent successfully!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
