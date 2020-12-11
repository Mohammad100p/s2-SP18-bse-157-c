const mongoose = require('mongoose');

const URI='mongodb+srv://ammar123:9000@shopping.y2z1m.mongodb.net/shoppingproducts?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;