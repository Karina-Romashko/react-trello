import React from "react";
import css from "./styles.module.css"
import { Input } from "components/common/Input/Input";
import { Button } from "components/common/Button/Button";

export class RegisterPage extends React.Component{

    render(){
        return(
            <div className={css.register} >
                <p>Register</p>
                <form action="">
                    <Input placeholder="Login" name='login'  />
                    <Input placeholder="Password" name='password'  type='password' />
                    <Input placeholder="Confirm password" name='password'  type='password' />
                    <Button title="Register"  />
                </form>
               
            </div>
        )
    }
}