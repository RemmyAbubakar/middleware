const router = require("express").Router;
const { pathMiddleware } = require("../middlewares/pathMiddleware")

const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/users.controller");

const userRouter = router();


userRouter.route("/").get(pathMiddleware, getUsers).post(createUser);
userRouter
  .route("/:userId")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

// userRouter.get("/", getUser)
// userRouter.create("/", createUser)
// userRouter.update("/", updateUser)
// userRouter.delete("/", deleteUser)

module.exports = userRouter;
