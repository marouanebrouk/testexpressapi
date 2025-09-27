import express from "express"
import { fetch,create,deleteClient, update,} from "../controllers/userController.js"

const route = express.Router();

route.post("/create",create)
route.get("/fetch",fetch)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteClient)


export default route;