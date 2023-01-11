import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import { useCreateTeamMutation } from '../../app/services/APISlice'


interface IProps {
   authStat:string
   authFun:(obj:any)=>void
}


const AuthBox: React.FC<IProps> = ({ authStat, authFun }) => {

  const [error, setError]=useState<any>({});
  const [authObj, setAuthObj] = useState<any>({})

  const handleChange=(name:string,value:string)=>{
    setAuthObj({...authObj, [name]:value})
  }

  const checkErrorFun = () => {
    String(authObj.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ?
        authObj.password != ""
      ?
        authFun(authObj)
      :
        setError({ password: "Please enter password to continue" })
      :
        setError({ email: "Please enter correct email to continue" });
  }

  useEffect(()=>{
    
    setError({});

    setAuthObj(
      {email:"", password:""}
    );

  },[authStat])

  return (

    <div className={`w-[350px] md:w-[400px] xsm:w-[80%] bg-[white] xsm:p-4 md:p-8 relative`}>
      <div className='font-subTitle bg-[white] font-[400px] text-[#121221] text-subTitleFont xsm:text-[1rem]'>
        Welcome {authStat === "signup" ? "" : "back"}
      </div>
      <div className='font-bold font-title bg-[white] text-[#121221] text-titleFont xsm:text-[18px] mt-1'>
        {authStat === "signup" ? "Signup to your account" : "Login to your account"}
      </div>
      <div className='font-subTitle font-[400px] bg-[white] text-[#444444] text-subTitleFont mt-7 relative'>
        <div className="font-subTitle font-[400px] bg-[white] text-[#444444] text-subTitleFont">
          Email
        </div>
        <div className="font-subTitle font-normal bg-[white] sm:bg-transparent
           text-[red] text-[14px] absolute top-[25px] sm:top-[80px] left-[15px] sm:left-[0px]">
          {error.email}
        </div>
      </div>
      <input className={`w-[350px] xsm:w-[80%] h-[50px] p-2 px-4 my-2 mt-3
         outline-none rounded rounded-[5px] border 
          bg-[white] text-[black] text-inputFont font-subTitle ${error.email ? "border-[red]" : "border-[#E8E8E8]"}`}
        type="email"
        name="email"
        value={authObj.email}
        onChange={(e: any) => {
          setError({});
          handleChange(e.target.name, e.target.value);
        }}
      />
      <div className='font-subTitle font-[400px] bg-[white] text-[#444444] text-subTitleFont mt-7 relative'>
        <div className="font-subTitle font-[400px] bg-[white] text-[#444444] text-subTitleFont">
          Password
        </div>
        <div className="font-subTitle font-[400px] bg-[white] text-[red] text-[14px] absolute top-[20px] left-[5px]">
          {error.password}
        </div>
      </div>
      <input className={`w-[350px] xsm:w-[80%] h-[50px] p-2 px-4 my-2 bg-[white] outline-none rounded rounded-[5px] border 
      border-[#E8E8E8] text-[black] text-inputFont font-subTitle ${error.password && "border border-[red]"}`}
        type="password"
        name="password"
        value={authObj.password}
        onChange={(e: any) => {
          setError({});
          handleChange(e.target.name, e.target.value);
        }}
      />

      <div className='w-[350px] xsm:w-[80%] flex xsm:flex-col justify-between items-center xsm:items-start
         my-4 mb-[30px] bg-[white] text-[black]'>

        <div className='w-[60%] xsm:w-[80%] flex justify-start items-center bg-[white] xsm:mb-[15px]'>
          <input className="rounded-full h-4 w-4 border
        border-[#E8E8E8] bg-[#E8E8E8] checked:bg-[#2F80ED] checked:border-blue-600 
        focus:outline-none transition duration-200 mr-2 cursor-pointer"
            type="radio" />
          <div className='font-subTitle text-inputFont bg-[white] text-[black]'>Remember me</div>
        </div>
        <div className='w-[auto] font-subTitle text-inputFont bg-[white] text-[#2F80ED] cursor-pointer'>
          Forgot Password?
        </div>
      </div>
      <div className={`w-[350px] xsm:w-[80%] h-[50px] rounded rounded-[5px]
       font-bold font-subTitle flex justify-center items-center 
       text-[white] text-subTitleFont
         ${((!authObj.email) || (!authObj.password)) ? "cursor-not-allowed" : "cursor-pointer"}
         ${((!authObj.email) || (!authObj.password)) ? "bg-[gray]" : "bg-[#2F80ED]"}
       `}
        onClick={() => {
          authObj.email && authObj.password ? checkErrorFun() : <></>
        }}
      >
        {authStat === "signup" ? "Signup" : "Login now"}
      </div>
      
    </div>

  )
}

export default AuthBox;