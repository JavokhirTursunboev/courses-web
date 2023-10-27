import axios from "./api";

const AuthServer = {
  async userRegister(user) {
    const response = await axios.post("/users", { user });
    return response.data;
  },
};
export default AuthServer;
