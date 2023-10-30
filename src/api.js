import axios from "axios";

const apiURL = "";

export async function getBateaux() {
  return await axios.get(`http://localhost:8085/getBateaux`);
}

export async function getVoituresEtVelos() {
  return await axios.get(`http://localhost:8085/voiture_velo`);
}
