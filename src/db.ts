import * as mongoose from "mongoose";
import config from '../config';

//mongoose.set("node-api", true);

// Connecting to the database
export default (async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stolen-bikes', { useNewUrlParser: true });
    // listen for requests
    console.log(`The Conection to database is Ok ${process.env.MONGODB_URI}`);
  } catch (err) {
    console.log(err);
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
  }
})();