const mongoose = require('mongoose');

const dbConfig = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully!'))
    .catch((err) => console.error('Database connection error:', err));
};

module.exports = dbConfig;