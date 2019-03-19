import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f609d6e8393d8591d061848b51ddbd286f61772c8b1705056ed96ed9aceab827"
  }
});
