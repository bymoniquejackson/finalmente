const { Router } = require("express");
const { hashPass, checkAccount } = require("../middleware");
const userRouter = Router();

const {
	addUser,
	listUsers,
	updateUser,
	deleteUser,
	loginUser,
} = require("./userController");


userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.patch("/user", updateUser);
userRouter.delete("/user", deleteUser);
userRouter.post("/user/login", checkAccount, loginUser);

module.exports = userRouter;