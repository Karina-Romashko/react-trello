import css from "./styles.module.css"
import { Card } from "components/Card"
import {Button} from "components/common/Button"
import {Input } from "components/common/Input"
import React from "react"

export class Dashboard extends React.Component {
    state = {
      value: "",
      isEdit: false,
      tasks: [
        { text: "task1", id: 1 },
        { text: "task2", id: 2 }
      ]
    };

 buttonAddClick = ()=>{
   if(this.state.isEdit){
this.setState((prev)=>({
      isEdit:true,
    tasks:[
        ...prev.tasks,
        {text: prev.value, id: prev.tasks.length + 1}
    ],
    value:""
}))
   } else {
     this.setState({isEdit:true})
   }

    
 }
 buttonCloseClick = ()=>{
  this.setState({isEdit:false})
 }

    render() {
      return (
        <div className={css.wrapper}>
          <Card
            title="todo"
            footer={
              <div>
                <Button click={this.buttonAddClick} title="Добавить" />
                <Button click={this.buttonCloseClick} title="Отмена" />
              </div>
            }
          >
              <div>
                  <ul className={css.list}>
                      {this.state.tasks
                      .map((item) => {
                        return(
                            <li className={css.listItem} key={item.id}>{item.text}</li>
                        )
                      }
                      )}
                  </ul>
                  {this.state.isEdit && <Input  value={this.state.value}  onChange={(event) => this.setState({value:event.target.value})}/>}
                  
              </div>
            
          </Card>
          <Card title="in progress" />
          <Card title="done" />
        </div>
      );
    }
  }