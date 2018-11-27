import React from "react";
import "./Modal.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
  <Auxx>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
      className="Modal"
    >
      {props.children}
    </div>
  </Auxx>
);

export default Modal;
