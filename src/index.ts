import { Elysia } from "elysia";
import { users } from "./user";
import { User } from "./types";
import { StatusCode } from "./types";
const app = new Elysia();
//CRUD operations 
app.get("/", ({ set }) => {
  try {
    set.status = StatusCode.SUCCESS
    return {
      message: "user fetched",
      data: users
    }

  } catch (error) {
    console.log(error)
    set.status = StatusCode.INTERNAL_SERVER_ERROR
    return {
      message: "Internal Server Error"
    }
  }
})
app.post("/create/", ({ set, body }) => {
  try {
    const user = body as User;
    users.push(user);
    set.status = StatusCode.SUCCESS
    return {
      message: "User added successfully.",
      users: users
    }
  } catch (error) {
    console.log("Error while creating new user")
    set.status = StatusCode.INTERNAL_SERVER_ERROR
    return {
      message: "Error while creating new user"
    }
  }
})
app.put("/update/:id", ({ set, body, params }) => {
  try {
    const userid = Number(params.id);
    const user = body as User;
    if (userid !== user.id) {
      set.status=StatusCode.BAD_REQUEST
      return {
        messsage: "Invalid request"
      }
    }
    let foundUser = users.find(u => u.id == userid);
    if (!foundUser) {
      set.status = StatusCode.NOT_FOUND
      return {
        message: "error, user not found"
      }
    }
    foundUser.email = user.email;
    foundUser.password = user.password;
    set.status = StatusCode.SUCCESS
    return {
      message: "user updated",
      users
    }
  } catch (e) {
    console.log("error while processing your request",e)
    set.status=StatusCode.INTERNAL_SERVER_ERROR
    return {
      message:"error while processing your request"
    }
  }
})
app.delete("/:id",({set,params})=>{
  const id=Number(params.id)
  const newUsers=users.filter(u=>u.id!=id)
  set.status=StatusCode.NOT_FOUND
  set.status=StatusCode.SUCCESS
  return{
    message:"deleted",
    users:newUsers
  }
})
app.get("/greet", () => "Good Morning..")
app.listen(3000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
