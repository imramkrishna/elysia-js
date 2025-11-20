import { Elysia } from "elysia";
import readController from "./controllers/CRUD/read.controller";
import createController from "./controllers/CRUD/create.controller";
import updateController from "./controllers/CRUD/update.controller";
import deleteController from "./controllers/CRUD/delete.controller";
import loginController from "./controllers/auth/login.controller";
import checkAuth from "./middlewares/authMiddleware";
import routes from "./routes";
const app = new Elysia();
//CRUD operations 

app.get("/", readController)
app.post("/create", createController)
app.put("/update/:id", updateController)
app.delete("/:id", deleteController)
app
  .post("/login", loginController)
routes.forEach(({ method, path, controller }) => {
  app.route(method, `/${path}`, controller)
})
app
  .use(checkAuth)
  .get("/test", ({ request }: any) => {
    console.log("Controller executed");
    return {
      message: "controller executed",
      user: request.decoded
    }
  })


app.listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

