import css from "./styles.module.css"
import { Link } from "react-router-dom"
import React from "react"
 export class HomePage extends React.Component{
render(){
    return(
        <div>
            <p className={css.hometitle}>TRELLO</p>
           <div className= {css.homepage}>
            <ul className={css.homemenu}>
                <li className={css.menuitem} ><Link to="./mainpage"> Main page </Link></li>
                <li className={css.menuitem}><Link to="./loginpage"> Login page </Link></li>
                <li className={css.menuitem}><Link to="./registerpage"> Register page </Link></li>
            </ul>
        </div> 
        </div>
        
    )
}

 }