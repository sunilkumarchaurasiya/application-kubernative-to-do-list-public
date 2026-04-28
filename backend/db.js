const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // 🔥 Hardcoded MongoDB Atlas connection string
        const mongoURI = "mongodb+srv://sk8418280_db_user:ttlk7svTexwnbspm@cluster0.giz8ye6.mongodb.net/mydb?retryWrites=true&w=majority";

        await mongoose.connect(mongoURI, connectionParams);

        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ Could not connect to database:", error.message);
        process.exit(1);
    }
};
