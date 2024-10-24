import axios from "axios";
export class ApiClient{

  baseUrl = "https://dogapi.dog/api/v2";
  baseApiUrl = "http://localhost:3001"
  authToken = () => window.localStorage.getItem("token");

async login(username,password){
  try {
    const response = await axios.post(`${this.baseApiUrl}/auth/login`,{username,password});
    if(!response.data){
      return {error: "Invalid username or password"};
    }
    return response.data;
  }
  catch(e){
    
    if(e.status === 401){
      return {error: "Invalid username or password"};
    } 
    console.error(e);
    return {error: "An error occurred"};
  }
}

  async getFacts(){
    const response = await axios.get(`${this.baseUrl}/facts?limit=5`).catch((e) => console.error(e));
    return response.data;
    
  }

  // our todo endpoints
  async getTodos(){
    const response = await axios.get(`${this.baseApiUrl}/todos/`,{
      headers: {
        Authorization: `${this.authToken()}`
      }
    });
    console.log("getTodos",response);
    return response.data;
  }

  async getTodoById(id){
    console.log("getTodoById",id);
    const response  = await axios.get(`${this.baseApiUrl}/todos/${id}`,{
      headers: {
        Authorization: `${this.authToken()}`
      }
    }).catch((e) => console.error(e));
    return response.data;
  }

  async createTodo(todo){
    const response = await axios.post(`${this.baseApiUrl}/todos/`,todo,{
      headers: {
        Authorization: `${this.authToken()}`
      }
    }).catch((e) => console.error(e));
  }

  async updateTodo(todo){
    const response = await axios.put(`${this.baseApiUrl}/todos/${todo._id}`,todo,{
      headers: {
        Authorization: `${this.authToken()}`
      }
    }).catch((e) => console.error(e));  
  }

  async deleteTodo(_id) {
    const response = await axios.delete(`${this.baseApiUrl}/todos/${_id}`,{
      headers: {
        Authorization: `${this.authToken()}`
      }
    }).catch((e) => console.error(e));
  }

}