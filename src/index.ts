import * as express from "express";
import { json } from "body-parser";
import { routes } from "./api/routes";

const router = express();
const jsonParser = json();
router.use(jsonParser);

const app = {
  router,
};

routes(app);

app.router.listen(process.env.PORT, () => {
  console.log(`Listening for requests on ${process.env.PORT}`);
});
