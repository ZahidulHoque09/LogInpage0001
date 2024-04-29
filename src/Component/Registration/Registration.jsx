import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification } from "firebase/auth";
import ChattingAppImage from "../../assets/ChattingAppImage.png";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


/* import Input from '../../Commoncomponent/Input'; */





const Registration = () => {
  const auth = getAuth();
  const[Email,setEmail]=useState("");

  const[Fullname,setFullname]=useState("");

  const [Password,setPassword]=useState("");

  const [Loading,setLoading]=useState(true)

  const [Eye,setEye]=useState(false);

  /*========== How To show ERROR on User===================  */
  
  const [EmailError,setEmailError]= useState("");
  const [FullNameError,setFullNameError]= useState("");
  const [PasswordError,setPasswordError]= useState("");


  const handleSubmit=(event)=>{
    event.preventDefault()

  }








/* ==================HandleEye functionality implementation======================== */

const HandleEye=()=>{
  setEye(! Eye)
}
/* ==================HandleEye functionality implementation======================== */


/* ============== Regex validation=========================== */
const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
const email="zahin_m96@yahoo.com"
console.log(regex.test(email));

const passwordregex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

const password="Pa$$w0rd!"
console.log(passwordregex.test(password));


/* ======= Email validation by regex=========== */





/* <=====================HandleSignUp functionality implenention===================== */

const HandleSignUp=()=>{
  if(!Email){
    setEmailError(" Email credential is missing or wrong")
    
    } else if (!regex.test(Email)){
      setEmailError(" Email credential is missing or wrong")
    }
    
    else if (!Fullname){
      setEmailError("")
      setFullNameError("Full Name  missing")

    } else if (!Password){
      setEmailError(" ");
      setFullNameError(" ");
      setPasswordError ("Password missing")
    } else if (!passwordregex .test(Password)){
      setPasswordError ("Password missing")
    }
     else {
      setLoading(true)
      setEmail("");
      setFullname("");
      setPassword("");
      setEmailError(" ");
      setFullNameError(" ");
      setPasswordError("");
      console.log("Everything is ok");

      /* =========Sign up a new user ============== */
      
      createUserWithEmailAndPassword(auth, Email, Passwordassword). 
      then((userCredential) => {
        console.log(userCredential);
        
        sendEmailVerification(auth.currentUser)
        .then(() => {

          toast.success('🦄 Please check your email', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          

         console.log("Check your email box");
        });
       console.log(userCredential);
      
      }
    ) .catch((error) => {
      if(error.message.inclues("email")){

        toast.error('Already register this Email Try another email', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

      }else{

        console.log(error.message);
      }

      
      
    });  /* .finally (()=>{     =======Errroor
      setLoading(false)

    }); */
   

    }


 
}



console.log(EmailError,FullNameError,PasswordError);
/* <=====================HandleSignUp functionality implenention===================== */

/* <=====================Handle Email Error functionality implenention===================== */



/* <=====================Handle Email Error functionality implenention===================== */








  return (
    <>
    
      <div className='flex justify-between items-center'>

 

<ToastContainer />



       <div className='w-1/2 h-fullvh flex justify-center items-center'>

        <div >
        <h1 className=' text-DarkBlue font-bold text-4xl mb-[12px font-Nunito]
        '>Get started with easily register</h1>
        <p className='text-Black font-normal text-xl opacity-50
        		 font-Nunito'>
          Free register and you can enjoy it</p>



        <form onSubmit={handleSubmit}>


        <div className='my-10'>
  
  <label htmlFor='email' className='font-semibold text-[12px]
             text-DarkBlue opacity-50 font-Nunito'>Email Address
  </label>
  
            <input type='text' 
            placeholder='Ladushing691@gmail.com'
            id='email'
            name='email'
            value={Email}
            autoComplete='off'
            className='w-full py-[22px]   rounded-lg px-5 border-2 border-blue-200 font-Nunito'
             onChange={(event)=>setEmail(event.target.value)}/>

             {EmailError && (
              <span className='text-red-500 font-Nunito mt-3 block'> {EmailError}</span>
             )}
             
  
            
  </div>
 


<div className='my-10'>
  
<label htmlFor='fullname' className='font-semibold text-[12px]
           text-DarkBlue opacity-50'>Ful name
</label>

          <input type='text'
           placeholder='Ladushing GTG'
          id='fullname'
          name='fullname'
          value={Fullname}
          autoComplete='off'
          className='w-full py-[22px]
          rounded-lg px-5 border-2 border-blue-200 font-Nunito'
          onChange={(event)=>setFullname(event.target.value)}/>

          
{FullNameError && (
              <span className='text-red-500 font-Nunito mt-3 block'> {FullNameError}</span>
             )}

          
</div>

<div className='my-10 relative'>
  
<label htmlFor='password' className='font-semibold text-[12px]
           text-DarkBlue opacity-50 font-Nunito' >Password
</label>

          <input type={Eye? "text":"password"}
           placeholder='abgty6#"@'
          id='password'
          name='password'
          value={Password}
          autoComplete='off'
          className='w-full py-[22px]
          rounded-lg px-5 border-2 border-blue-200 font-Nunito'
          onChange={(event)=>setPassword(event.value.taget)}/>

          
{PasswordError && (
              <span className='text-red-500 font-Nunito mt-3 block'> {PasswordError}</span>
             )}

          <div className='absolute top-1/2 right-8  translate-y-[50%] cursor-pointer'
          onClick={HandleEye}> 
          {Eye ?    <FaRegEye/>: <FaEyeSlash/>}
         
          </div>

          
</div>


<button type='submit' className='w-full bg-Btncolor py-5
 rounded-full text-white text-xl font-normal font-Nunito relative'
 onClick={HandleSignUp}>

 {Loading && (<div className='absolute left-[35%] top-[36%] animate-spin h-5 w-5
  bg-red-500 rounded-full border-t-4 border-b-4 border-cyan-500'>
  </div>)}
  

 


   
 
  
  
  Sign up</button>





        </form>








<div className='text-center mt-[35px] '>
 <p className='text-[#03014C] font-Open Sans'>Already  have an account  ?   
  
 <span className='text-[#EA6C00] text-[16px] font-bold font-Open Sans align-middle hover:underline mx-3' >Sign In</span> </p> 
</div>

        </div>
       
        </div> 





       <div className="w-1/2 bg-black	 h-fullvh">
        <img src={ChattingAppImage} alt={ChattingAppImage}
        className='min-w-full h-screen'/>
        </div> 



      </div>
    </>
  )
}

export default Registration
