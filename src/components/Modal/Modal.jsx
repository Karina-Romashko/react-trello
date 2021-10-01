import css from "./styles.module.css"
import {Button} from "components/common/Button"
import {Input} from "components/common/Input"
import React from "react"
 

export class Modal extends React.Component{

    render(){
        const {isVisible, onClose, children, title } = this.props
        if (!isVisible){
            return null
        }
        return(
            <div className={css.bgModal}>
                <div className={css.modal}>
                    
                   <div>
                       <div className={css.modalTitle} >
                           <span className={css.modalTitleText}>{title}</span>
                           <div className={css.buttonClose } onClick={onClose}>x</div>
                       </div>
                       
                       {children}</div> 
                  
                </div>
                
            </div>
        )
    }
}
