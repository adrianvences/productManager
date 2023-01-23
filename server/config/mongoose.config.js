const mongoose = require("mongoose");


const connectDb = () => {
mongoose.set('strictQuery' , true);
mongoose
  .connect("mongodb://localhost/productsDb", { // if the database does not exist yet it will be created
    // you only need these two lines if you are in mongo 5
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    retryWrites: true, // if there is a network outage the writes will be retried
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
}

module.exports = connectDb;