import UserModel from "../../../infrastructure/models/UserModel.js";
import User from "../../entities/User.js";

class UserRepository {
  async findByEmail(email) {
    try {
      const user = await UserModel.findOne({ email }).lean();
      if (!user) return null;

      return new User({
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        password: user.password,
      });
    } catch (error) {
next(error);      return null;
    }
  }
  async findById(id) {
    try {
      const user = await UserModel.findById(id).lean();
      if (!user) return null;
      return {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
      };
    } catch (error) {
next(error);      return null;
    }
  }
  async create(user) {
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return new User({
      id: savedUser._id.toString(),
      username: savedUser.username,
      email: savedUser.email,
    });
  }
}

export default UserRepository;
