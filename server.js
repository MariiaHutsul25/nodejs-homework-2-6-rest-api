const mongoose = require("mongoose");
const app = require("./app");

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database connection succcessful. Server running. Use our API on port: ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
