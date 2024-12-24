import React from "react";
import {useForm,} from "react-hook-form"

export default function Sigin(){

    const {register,handleSubmit,watch,formState: { errors },} = useForm();

    const submitForm=(data)=>{
        console.log(data); 
    }
    return(
        <>
            <form onSubmit={handleSubmit(submitForm())}>
                <label >Username</label>
                <input {...register("username",{
                    required:"true"
                })} aria-invalid={errors.username ? "true" : "false"} />
                {errors.username && <span style={{color:"red"}}>*This field is required</span>}
                <label >Password</label>
                <input {...register("password",{
                    required:"true"
                })} aria-invalid={errors.password ? "true" : "false"}/>
                {errors.password && <span style={{color:"red"}}>*This field is required</span>}
                <input type="submit" />
            </form>
        </>
    )

}