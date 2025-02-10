"use client";  

import React, { useState } from 'react';  

export default function Auth() {  
  const [isLogin, setIsLogin] = useState(true);  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [errors, setErrors] = useState({});  

  const toggleForm = () => {  
    setIsLogin((prev) => !prev);  
    setErrors({}); // Reset errors when toggling forms  
    setEmail('');  
    setPassword('');  
  };  

  const validateForm = () => {  
    const errorMessages = {};  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex  

    if (!email) {  
      errorMessages.email = 'Email is required';  
    } else if (!emailPattern.test(email)) {  
      errorMessages.email = 'Email is not valid';  
    }  

    if (!password) {  
      errorMessages.password = 'Password is required';  
    } else if (password.length < 6) {  
      errorMessages.password = 'Password must be at least 6 characters long';  
    }  

    return errorMessages;  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const validationErrors = validateForm();  
    if (Object.keys(validationErrors).length > 0) {  
      setErrors(validationErrors);  
      return;  
    }  

    // Handle successful submission logic here (e.g., API call)  
    console.log('Form submitted with:', { email, password });  
    // Reset fields  
    setEmail('');  
    setPassword('');  
  };  

  return (  
    <div className="container max-w-[1440px] mx-auto">  
      <div className="flex items-center justify-center min-h-screen md:mt-20 mt-10" id='auth'>  
        <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-xl shadow-teal-800">  
          <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>  

          <form onSubmit={handleSubmit}>  
            <div className="mb-4">  
              <label className="block mb-2 text-sm font-medium text-white">Email</label>   
              <input  
                type="email"  
                required  
                className={`block w-full px-4 py-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}   
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
              />  
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}  
            </div>   

            <div className="mb-4">  
              <label className="block mb-2 text-sm font-medium text-white">Password</label>  
              <input  
                type="password"  
                required  
                className={`block w-full px-4 py-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}   
                value={password}   
                onChange={(e) => setPassword(e.target.value)}  
              />  
              {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}  
            </div>   

            <button  
              type="submit"  
              className="w-full mt-4 text-white border py-2 bg-transparent border-teal-900 rounded-md hover:bg-transparent hover:text-white hover:border-yellow-400 hover:bg-yellow-400 text-[20px]">  
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
    </div>  
  );  
};
// "use client"


// import React, { useState } from 'react';  


  

// export default function Auth(){
 
//   const [isLogin, setIsLogin] = useState(true);  

//   const toggleForm = () => {  
//     setIsLogin((prev) => !prev);  
//   };  

//   return (  
//     <div className="container max-w-[1440px] mx-auto">

//     <div className="flex items-center justify-center min-h-screen md:mt-20 mt-10"  id='auth'>  
//       <div className="w-full max-w-md p-6 bg-transparent rounded-lg shadow-xl shadow-teal-800">  
//         <h2 className="mb-6 text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>  


//         <form>  

//           <div className="mb-4">  
//             <label className="block mb-2 text-sm font-medium text-white"> Email </label> 
//              <input  type="email"  required className="block w-full px-4 py-3 border rounded-md "/>  
//           </div> 

//           <div className="mb-4">  
//             <label className="block mb-2 text-sm font-medium text-white">  Password  </label>  
//             <input type="password" required  className="block w-full px-4 py-3 border rounded-md "/>  
//           </div> 

//           <button type="submit"  
//             className="w-full mt-4 text-white border py-2 bg-transparent border-teal-900 rounded-md hover:bg-transparent hover:text-white
//             hover:border-yellow-400 hover:bg-yellow-400 text-[20px]">  
//             {isLogin ? 'Login' : 'Sign Up'}  
//           </button> 
//         </form>  

//         <button  
//           onClick={toggleForm}  
//           className="mt-4 text-sm text-white hover:underline">  
//           {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}  
//         </button>  
        
//       </div>  
//     </div> 

//     </div> 
//   );  
// };  

