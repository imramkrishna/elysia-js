import { Context } from "elysia";
import { StatusCode } from "../../types";
import { users } from "../../user";
import { User } from "../../types";
const updateController=({ set, body, params }:Context) => {
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
}
export default updateController
