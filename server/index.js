const app = require("./src/index");
const { connect, db } = require("./src/Configs/db");
const PORT = process.env.PORT || 8000;

const cors = require("cors");

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions));

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Database Connected", db);
  } catch (err) {
    console.log({ err: err.message });
  }
  console.log("listeninig on PORT", PORT);
});
