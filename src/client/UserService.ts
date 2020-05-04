import axios from "axios";
import IUser from "../common/IUser";

class UserService {
  private readonly endPointUrl: string;

  constructor(endPointUrl: string) {
    this.endPointUrl = endPointUrl;
  }

  // Useful when testing async functionality in the front-end. Usage: await sleep(1000)
  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async getUsers() {
    const res = await axios.get(this.endPointUrl);
    console.log(res);
    return res.data as IUser[];
  }
}

export default UserService;
