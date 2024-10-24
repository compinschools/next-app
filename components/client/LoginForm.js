"use client"
import { ApiClient } from "@/lib/ApiClient";
export default function LoginForm() { 

  const submitForm = async (e) =>{
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const apiClient = new ApiClient();
    const response = await apiClient.login(username,password);
    console.log(response);
    if(response.error){
      alert(response.error);
    }
    else{
     window.localStorage.setItem("token",response.authToken);
      window.location.href = "/todo"; 
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="mt-5" onSubmit={submitForm}>
        <label className="block mb-5">
          Username:
          <input type="text" name="username" className="text-black " />
        </label>
        <label className="block mb-5">
          Password:
          <input type="password" name="password"  className="text-black "/>
        </label>
        <button type="submit" className="bg-blue-900 m-1 p-5 pt-2 pb-2 rounded-xl">Login</button>
      </form>
    </div>
  );
}