import bcrypt from "bcryptjs";

class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email, password) {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      const isPassword = await bcrypt.compare(password, user.password);
      if (isPassword) {
        return { success: true, message: "Login successful", user };
      }
    }
  }
}
export default LoginUser;