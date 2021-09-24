import css from "./styles.module.css"
import {Button} from "../common/Button"
import {Input} from "../common/Input"
import React from "react"
 

export class Modal extends React.Component{

    render(){
        const {isVisible, onClose, children } = this.props
        if (!isVisible){
            return null
        }
        return(
            <div className={css.bgModal}>
                <div className={css.modal}>
                    <Input title="CardName"></Input>
                   <div>{children}</div> 
                </div>
                <div className={css.buttonClose } onClick={onClose}>x</div>
            </div>
        )
    }
}
