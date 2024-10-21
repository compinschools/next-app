import axios from "axios";
export class ApiClient{

  baseUrl = "https://dogapi.dog/api/v2";

  async getFacts(){
    const response = await axios.get(`${this.baseUrl}/facts?limit=5`).catch((e) => console.error(e));
    return response.data;
    
  }


}