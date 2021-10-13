import css from "./styles.module.css"
import { Link } from "react-router-dom"
import React from "react"
 export class HomePage extends React.Component{
     state = {
        menuItems:[
            {id:1, link:"./mainpage", text:"Main page"},
            {id:2, link:"./loginpage", text:"Login page"},
            {id:3, link:"./registerpage", text:"Register page"},
        ]
     }
render(){
    return(
        <div>
            <p className={css.hometitle}>TRELLO</p>
           <div className= {css.homepage}>
            <ul className={css.homemenu}>
                { this.state.menuItems
                .map((item)=>{
                    return(
                        <li className={css.menuitem} key={item.id}> <Link to={item.link}>{item.text}</Link> </li>
                    )
                })

                }

            </ul>
        </div> 
        </div>
        
    )
}

 }