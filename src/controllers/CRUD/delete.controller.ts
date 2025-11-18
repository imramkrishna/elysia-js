import { Context } from "elysia"
import { StatusCode } from "../../types"
import { users } from "../../user"
const deleteController=({set,params}:Context)=>{
  const id=Number(params.id)
  const newUsers=users.filter(u=>u.id!=id)
  set.status=StatusCode.SUCCESS
  return{
    message:"user deleted",
    users:newUsers
  }
}
export default deleteController