const mongoose = require('mongoose');
const app = require('../app');
const dotenv = require('dotenv');

dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`);

  console.log("connected to db");
  app.listen(process.env.port || 3000, () => {
    console.log('Server is running on port 3000');
  });
};
