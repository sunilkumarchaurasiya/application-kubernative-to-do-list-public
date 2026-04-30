const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // 🔴 Hardcoded secret for testing Trivy
        const mongoURI = "mongodb+srv://testuser:testpassword123@cluster0.mongodb.net/mydb";

        if (!mongoURI) {
            throw new Error("MONGODB_URI not found in environment");
        }

        await mongoose.connect(mongoURI, connectionParams);

        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ DB connection failed:", error.message);
        process.exit(1);
    }
};
