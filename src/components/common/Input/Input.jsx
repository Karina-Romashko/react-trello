import React from "react";
import css from "./styles.module.css"

export function Input ({value, onChange, isVisible, placeholder, name, type }){
   
        return(
            <div>
                
                    <input isVisible={isVisible} value={value} onChange={onChange} className ={css.input} placeholder={placeholder} name={name} type={type}/>
                
            </div>

        )
    }
