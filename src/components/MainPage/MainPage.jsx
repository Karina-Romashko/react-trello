import css from "./styles.module.css"
import { Header } from "components/Header";
import { Dashboard } from "components/Dashboard";

export function MainPage(){
    return(
        <div>
        <Header />
        <Dashboard />
        </div>
      
    );

}
