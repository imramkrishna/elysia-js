import { Context } from "elysia";
import { users } from "../../user";
import { StatusCode } from "../../types";
import { User } from "../../types";
const createController = ({ set, body }: Context) => {
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
}
export default createController;