var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect(process.env.MONGODB_URI || '');

module.exports = mongoose