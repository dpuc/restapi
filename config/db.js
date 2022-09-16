const mongoose = require('mongoose');
require('dotenv').config({path: 'env'});

const conectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('db ok')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectDb