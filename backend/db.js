const mongoose = require("mongoose");
 
module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
 
        const mongoURI = process.env.MONGODB_URI;
 
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
