const mongoose = require('mongoose');
const logger = require('../startup/logger');

module.exports = function() {
    //const uri = "mongodb+srv://GBAD950:myvidlyproj@vidly.vo59d.mongodb.net/vidly?retryWrites=true&w=majority";
    const uri = 'mongodb://localhost/rwr-proj'
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => logger.info(`Connected to ${uri}`))
            .catch(err => logger.error(err));

}
