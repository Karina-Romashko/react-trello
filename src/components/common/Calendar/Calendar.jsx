import React from "react";
import css from "./styles.module.css"

export class Calendar extends React.Component{
state = {
    value: "",
}

changeValue = (event) =>{
    this.setState({value:event.target.value})
};

    render(){
        return(
            <div>
                <input type="date" 
                className={css.calendar}
                value = {this.state.value}
                onChange = {this.changeValue}
                />
            </div>
            );
    }
}