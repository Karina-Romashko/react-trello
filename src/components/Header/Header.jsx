import css from "./styles.module.css"
import {Modal} from "../Modal"
import React from "react"

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
              <ul>
                <li>Пункт 1</li>
              </ul>
            </Modal>
            <span onClick={() => this.setState({ test: true })}>menu</span>
          </div>
        </div>
      );
    }
  }