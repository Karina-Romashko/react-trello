import css from "./styles.module.css"
import { Card } from "../Card"
import {Button} from "../common/Button"
import {Input } from "../common/Input"
import React from "react"

export class Dashboard extends React.Component {
    state = {
      value: "",
      isEdit: true,
      tasks: [
        { text: "task1", id: 1 },
        { text: "task2", id: 2 }
      ]
    };

 buttonAddClick = ()=>{
    this.setState((prev)=>({
    tasks:[
        ...prev.tasks,
        {text: prev.value, id: prev.tasks.length + 1}
    ],
    value:""
}))
 }
 

    render() {
      return (
        <div className={css.wrapper}>
          <Card
            title="todo"
            footer={
              <div>
                <Button click={this.buttonAddClick} title="Добавить" />
                <Button  title="Отмена" />
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
                  <Input value={this.state.value} onChange={(event) => this.setState({value:event.target.value})}/>
              </div>
            
          </Card>
          <Card title="in process" />
          <Card title="done" />
        </div>
      );
    }
  }