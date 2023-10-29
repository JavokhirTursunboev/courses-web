import axios from "./api";

const AuthServer = {
  async userRegister(user) {
    const { data } = await axios.post("/users", { user });
    return data;
  },

  async userLogin(user) {
    const { data } = await axios.post("/users/login", { user });
    return data;
  },

  async getUser(user) {
    const { data } = await axios.get("/user", { user });
    return data;
  },
};
export default AuthServer;
