import { StatusCode } from "../../types"
import { Context } from "elysia"
import { users } from "../../user"
const readController=({ set }:Context) => {
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
}
export default readController