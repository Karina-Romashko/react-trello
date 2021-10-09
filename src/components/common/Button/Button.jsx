import css from "./styles.module.css"

export function Button ({click, title}){
    return(
        <button onClick={click}  className={css.buttonClick} type="button">
            {title}
        </button>
    )
}