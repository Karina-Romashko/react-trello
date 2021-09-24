import { Component } from "react";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { Button } from "./common/Button";
import { Dashboard } from "./Dashboard";
import { Input } from "./common/Input";
import { Calendar } from "./common/Calendar";

export function App() {
  return (
    <div>
      <Header />
        <Modal />
        <Dashboard />
        <Button />
        <Input />
        <Calendar />
    </div>
    
  );
}


