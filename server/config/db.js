const mongoose = require("mongoose");

let connectDB =  () => {
    try {
        mongoose.connect(process.env.MONGOOSE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', function () {
            console.log("Database Connected")
        });

    } catch (error) {
        return error;
    }
}

module.exports = connectDB;