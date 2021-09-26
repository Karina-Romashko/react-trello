import React from "react";
import css from "./styles.module.css"

export function Input ({value, onChange}){
   
        return(
            <div>
                
                    <input value={value} onChange={onChange} className ={css.input}/>
                
            </div>

        )
    }
