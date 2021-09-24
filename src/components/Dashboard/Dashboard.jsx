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
        { text: "text1", id: 1 },
        { text: "text2", id: 2 }
      ]
    };
  changeValue =(event) =>{
    this.setState({value:event.target.value})
  }
    render() {
      return (
        <div className={css.wrapper}>
          <Card
            title="todo"
            footer={
              <div>
                <Button title="Добавить" />
                <Button title="Отмена" />
              </div>
            }
          >
            <input value={this.state.value} onChange={this.changeValue}/>
          </Card>
          <Card title="in process" />
          <Card title="done" />
        </div>
      );
    }
  }