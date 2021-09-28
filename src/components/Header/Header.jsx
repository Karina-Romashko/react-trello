import css from "./styles.module.css"
import {Modal} from "../Modal"
import React from "react"
import { Button } from "../common/Button";

export class Header extends React.Component {
    state = {
      test: false
    };
  
    render() {
      return (
        <div className={css.headerWrapper}>
          <div className={css.headerLogo}>Trello</div>
          <div className={css.headerMenu}>
            <Modal
              isVisible={this.state.test}
              onClose={() => this.setState({ test: false })}
            >
              
              <ul className={css.headerMenuList} >
                <li className={css.headerMenuItem}><Button title="Очистить todo"/></li>
                <li  className={css.headerMenuItem}><Button title="Очистить in progress"/></li>
                <li  className={css.headerMenuItem}><Button title="Очистить done"/></li>
                <li  className={css.headerMenuItem}><Button title="Очистить всё"/></li>
              </ul>
            </Modal>
            <span onClick={() => this.setState({ test: true })}>menu</span>
          </div>
        </div>
      );
    }
  }