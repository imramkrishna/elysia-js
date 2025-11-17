import { Elysia } from "elysia";

const app = new Elysia();
app.post("/login",({body})=>{
  console.log(body);
})

app.get("/", () => "Hello Elysia")
app.get("/greet",()=>"Good Morning..")
app.listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
