import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
  headers: {
    pinata_api_key: process.env.REACT_APP_PINATA_API_KEY!,
    pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY!,
  },
});

export default customAxios;
