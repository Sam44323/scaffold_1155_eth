import axios from "axios";

const PinataAxios = axios.create({
  baseURL: "https://api.pinata.cloud/pinning",
  headers: {
    pinata_api_key: process.env.REACT_APP_PINATA_API_KEY!,
    pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY!,
  },
});

const NftPortAxios = axios.create({
  baseURL: "https://api.nftport.xyz/v0",
  headers: {
    Authorization: process.env.REACT_APP_NFTPORT_API!,
  },
});

export { PinataAxios, NftPortAxios };
