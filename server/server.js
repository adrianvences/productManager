const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


// this helps us grab from two paths eg: 5001 and 8000 // install istructions : npm i cors 
const cors = require('cors');
app.use(cors(), express.json()); //express.json is our json body parcer. middle ware


// this establishes connection to database
const connectDb = require('./config/mongoose.config');
connectDb();

// require('./server/routes/person.routes')(app); // This is platform version
const productRouter = require('./routes/product.routes');
app.use('/api', productRouter);

// the listen is always the last line 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );