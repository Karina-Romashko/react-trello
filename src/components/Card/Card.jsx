import css from "./styles.module.css"

export function Card({title, button, footer, children}) {
return(
<div className={css.card}>
<div className={css.title}> {title} </div>
{children}

{footer}

</div>
);
}