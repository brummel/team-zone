import axios from "axios";

class UserService {
  constructor(endPointUrl) {
    this.endPointUrl = endPointUrl;
  }

  // Useful when testing async functionality in the front-end. Usage: await sleep(1000)
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async getUsers() {
    const res = await axios.get(this.endPointUrl);
    console.log(res);
    return res.data;
  }
}

export default UserService;
