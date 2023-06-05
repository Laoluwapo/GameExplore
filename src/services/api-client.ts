import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0fd98ba923b14ea7a7e755d65863f37b",
  },
});
