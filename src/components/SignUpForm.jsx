import {useState} from "react";
import { useForm } from 'react-hook-form';
'use client';
import '../index.css'


export default function SignupForm()

{
  const {register, handleSubmit}= useForm();
    function onSubmit(data)
    {
        alert (`submitted with email: ${data.email} and password: ${data.password}` )
    }
    return (
        <div style={{maxWidth:400, margin: "2rem auto"}}>
             
            <h1 className ="sign_up" >Sign Up </h1>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div  style={{marginBottom:"1rem"} }>
                <label>
                Email
                <input className="email_input" type="email" placeholder ="you@example.com"
                {...register("email" , {required : "Email  is required"})}/>
                </label>
            </div>
            <div style ={{marginBottom: "1rem"}}>
                <label>Password 
                    <input className ="form_input" type="password " 
                    placeholder="******"
                    {...register("password", {required: "Pass is required"})}/>
                </label>
            </div>
            <button className="submit__button" type ="submit">Create account</button>
            </form>
        </div>
    )
}
