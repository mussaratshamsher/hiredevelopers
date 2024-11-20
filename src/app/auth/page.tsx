
"use client"


import React, { useState } from 'react';  


  

export default function Auth(){
 
  const [isLogin, setIsLogin] = useState(true);  

  const toggleForm = () => {  
    setIsLogin((prev) => !prev);  
  };  

  return (  
    <div className="flex items-center justify-center min-h-screen md:mt-20 mt-10 "  id='auth'>  
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-xl shadow-teal-800">  
        <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>  


        <form>  

          <div className="mb-4">  
            <label className="block mb-2 text-sm font-medium text-white"> Email </label> 
             <input  type="email"  required className="block w-full px-4 py-2 border rounded-md "/>  
          </div> 

          <div className="mb-4">  
            <label className="block mb-2 text-sm font-medium text-white">  Password  </label>  
            <input type="password" required  className="block w-full px-4 py-2 border rounded-md "/>  
          </div> 

          <button type="submit"  
            className="w-full py-2 mt-4 text-white border bg-transparent border-teal-900 rounded-md hover:bg-transparent hover:text-white
            hover:border-white hover:bg-yellow-400 ">  
            {isLogin ? 'Login' : 'Sign Up'}  
          </button> 

        </form>  

        <button  
          onClick={toggleForm}  
          className="mt-4 text-sm text-white hover:underline">  
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}  
        </button>  
        
      </div>  
    </div>  
  );  
};  

