import axios from "axios";

const apiURL = "http://localhost:8085/getBateaux";

export async function getBateaux(config) {
  return await axios.get(`${apiURL}/`, config);
}
