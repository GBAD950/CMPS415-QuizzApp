const mongoose = require('mongoose');;

module.exports = function() {
    //const uri = "mongodb+srv://GBAD950:myvidlyproj@vidly.vo59d.mongodb.net/vidly?retryWrites=true&w=majority";
    const uri = 'mongodb://localhost/rwr-proj'
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => console.log(`Connected to ${uri}`))
            .catch(err => console.error(err));

}
