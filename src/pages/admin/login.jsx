import React, { useState } from "react";
import { getToken } from "../../api/Request";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { toast, ToastContainer } from "react-toastify";
import loginFormSchema from "../../validation/loginform";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  };
//   const routeChange = (res) => {
//     let path
//     if(res){
//       if(res.code===0){
//       toast.error("Invalid Credentials", {
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//   });
//   console.log("inside this");

// }
//   else
//     {
//       path='/admin'
//       history.push(path);
//     }
// }
//     else
//     {
//       path='/admin'
//       history.push(path);
//     }
    
    
    
//   };
const validate = async () => {

  let Username=username;
  let Password=password;
  const { error } =  loginFormSchema.validate({Username,Password});
  if (error) {
    toast.error(error.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    let res = await getToken(username, password);
    if (res.code !== 0) {
      routeChange("/admin");
    } else {
      toast.error("Invalid Credentials", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
};
  const handleOnClick = (e) => {
    e.preventDefault();
    validate()    
  };
  
  return (
    <div className="flex md:container md:mx-auto h-screen items-center justify-center">
      <ToastContainer />
    <div
      id="container"
      className="flex flex-col align-middle w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"
      style={{backgroundColor: "#383844"}}
    >
      <div className="self-center mb-6 text-xl font-light sm:text-2xl text-white">
        Evie Admin Login
      </div>
      <div className="mt-8">
        <form autoComplete="off">
          <div className="flex flex-col mb-2">
            <div className="flex relative ">
              <span className="inline-flex  items-center px-3 bg-none mt-2 text-white text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                </svg>
              </span>
              <input
                type="text"
                className="flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-indigo-800 outline-none focus:border-transparent"
                placeholder="Username"
                name="uname"
                onChange={(e) => setUsername(e.target.value)}
                style={{backgroundColor:"#16151C"}}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex relative ">
            <span className="inline-flex  items-center px-3 bg-none mt-2 text-white text-sm">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                </svg>
              </span>
              <input
                type="password"
                className="flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-indigo-800 outline-none focus:border-transparent"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{backgroundColor:"#16151C"}}
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 fc-button w-full rounded-lg "
              onClick={handleOnClick}
              style={{backgroundColor:"#16151C"}}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
