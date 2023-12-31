import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validation";

export default function RegisterForm(){
    const {
        register, 
        handleSubmit, 
        watch, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(signUpSchema),
    });
    const onSubmit = (data) => console.log(data);
    console.log("values", watch());
    console.log("errors",errors);
    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden">
           {/*Container */}
            <div className="max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-x1">
               {/*Heading*/}
               <div className="text-center dark: text-dark_text_1">
                  <h2 className="mt-6 text-3x1 font-bold">Welcome</h2>
                  <p className="mt-2 text-sm">Sign in</p>
               </div>
               {/*Form*/}
               <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <button type="submit">submit</button>
                </form>
            </div>        
        </div>
    )
}