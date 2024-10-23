import axios from "axios";
export class ApiClient{

  baseUrl = "https://dogapi.dog/api/v2";

  async getFacts(){
    const response = await axios.get(`${this.baseUrl}/facts?limit=5`).catch((e) => console.error(e));
    return response.data;
    
  }

  // our todo endpoints
  async getTodos(){
    const response = await axios.get('/api/todos/').catch((e) => console.error(e));
    return response.data;
  }

  async getTodoById(id){
    console.log("getTodoById",id);
    const response  = await axios.get(`/api/todos/${id}`).catch((e) => console.error(e));
    return response.data;
  }

  async createTodo(todo){
    const response = await axios.post('/api/todos/',todo).catch((e) => console.error(e));
  }

  async updateTodo(todo){
    const response = await axios.put(`/api/todos/${todo._id}`,todo).catch((e) => console.error(e));  
  }

  async deleteTodo(_id) {
    const response = await axios.delete(`/api/todos/${_id}`).catch((e) => console.error(e));
  }

}