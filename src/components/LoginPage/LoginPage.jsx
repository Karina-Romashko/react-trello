import css from './styles.module.css'
import { Input } from "components/common/Input"
import { Button } from "components/common/Button"
import React from "react"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

export class LoginPage extends React.Component{

    state = {
        values: {login:"", password:""},
        errors: {login:"", password:""},
        isAuth: true,
    }
    handler = ({ target }) => {
        this.setState((prevState) => ({
            values: {
                ...prevState.values,
                [target.name]: target.value,
            }
        }));
    }
   
    signIn = ({target}) => {
        if (this.state.values.login ==='Vika' && this.state.values.password==='Vik' ){
           this.setState({isAuth:true}) 
         alert('success')
                   
        }else if (this.state.values.login !=='Vika' && this.state.values.password !=='Vik'){
            alert('Wrong data!')
        }else if (this.state.values.password !=='Vik'){
            alert('Wrong password!')
        } else if ( this.state.values.login !=='Vika'){
            alert('Wrong login!')
        }
    }

    render(){
        return(
            <div className={css.login} >
                <p>Login</p>
                <form action="">
                    <Input placeholder="Login" name='login' onChange={this.handler} className={css.loginInput} />
                    <Input placeholder="Password" name='password' onChange={this.handler} type='password' className={css.loginInput}/>
                    <Button title="Login" click={this.signIn} />
                </form>
               
            </div>
            
        )
    }
}