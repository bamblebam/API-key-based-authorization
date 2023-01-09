import db from "./src/handlers/db.handler";
import app from "./src/app";

const port = process.env.PORT || 3000;

(async () => {
  try {
    // Connect to database
    await db.authenticate();
    await db.sync({ force: false, alter: true });
    console.log("Database connection succesfully estabilished");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err: any) {
    console.log(err);
  }
})();
