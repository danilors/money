import React from "react";
import {
  Title,
  Input,
  AddForm,
  ModalContainer,
  ModalContent,
  ModalCloseButton
} from "./index";
import { connect } from "react-redux";
import { Button, FieldGroup } from "../components";
import { withState, compose } from "recompose";

const enhancer = compose(
  connect(state => state),
  withState("showModal", "setShowModal", false)
);

const Modal = ({ children, showModal, setShowModal }) => (
  <div>
    <FieldGroup>
      <Button
        type={"button"}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add Entrada
      </Button>
    </FieldGroup>
    {showModal && (
      <ModalContainer>
        <ModalContent>
          <ModalCloseButton
            onClick={() => {
              setShowModal(false);
            }}
          >
            &times;
          </ModalCloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    )}
  </div>
);

export default enhancer(Modal);