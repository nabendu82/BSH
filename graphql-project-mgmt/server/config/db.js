const mongoose = require('mongoose')

const connectDB = async () => {
    const connection_url = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connection_url.connection.host}`)
}

module.exports = connectDB;