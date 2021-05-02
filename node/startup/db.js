const mongoose = require('mongoose');;

module.exports = function() {
  const uri = "mongodb+srv://GBAD950:CMPS415Section1@cmps415rwr.8txju.mongodb.net/cmps415rwr?retryWrites=true&w=majority";
  //const uri = 'mongodb://localhost/rwr-proj'
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
            .then(() => console.log(`Connected to ${uri}`))
            .catch(err => console.error(err));

}

