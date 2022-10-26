const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.DB_STRING)
    console.log(`MONGODB DB Connected`.cyan.underline.bold)
}

module.exports = connectDB