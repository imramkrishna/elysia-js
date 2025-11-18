import { Elysia } from "elysia";
import readController from "./controllers/CRUD/read.controller";
import createController from "./controllers/CRUD/create.controller";
import updateController from "./controllers/CRUD/update.controller";
import deleteController from "./controllers/CRUD/delete.controller";
const app = new Elysia();
//CRUD operations 

app.get("/", readController)
app.post("/create",createController)
app.put("/update/:id",updateController)
app.delete("/:id",deleteController)

app.listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
