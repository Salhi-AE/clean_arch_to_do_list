import bcrypt from "bcryptjs";

class RegisterUser {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
  async execute(userData) {
    const existingUser = await this.userRepo.findByEmail(userData.email);

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = {
        ...userData,
        password: hashedPassword,
      };
      return await this.userRepo.create(newUser);
    }
  }
}
export default RegisterUser;
