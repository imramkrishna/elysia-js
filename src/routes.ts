import { addUserController, getUserController } from "./controllers/dbcontroller"
import { apiRoute } from "./types";
const routes:apiRoute[]=[
    {
        path:"getUser",
        method:"get",
        controller:getUserController
    },
    {
        path:"addUser",
        method:"post",
        controller:addUserController
    }
]
export default routes;