import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import orders from "../data/purchaseorders.json";
import { PopOut } from "./PopOut";

Modal.setAppElement(document.getElementById("root"));

const StyledPara = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  height: 55vh;
  font-size: 1.5rem;
`;

const StyledButton = styled.button`
  margin-top: 5rem;
  margin-left: 10rem;
`;

const modalStyles = {
  content: {
    backgroundColor: "#F9F9F9",
  },
};

export function Orders() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [selectedItem, setSelectedItem] = React.useState(1);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <StyledPara>
      {orders.mvPurchaseOrders.map((data, key) => {
        return (
          <p
            key={key}
            className="orders-list__item"
            onClick={() => {
              openModal();
              setSelectedItem(data.PurchaseOrderId);
              console.log(selectedItem);
            }}
          >
            {data.PurchaseOrderTypeAbbreviation} - {data.PurchaseOrderNo}
          </p>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Purchase Order Information"
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <PopOut selectedItem={selectedItem} />
        <StyledButton className="window--close" onClick={closeModal}>
          Close
        </StyledButton>
      </Modal>
    </StyledPara>
  );
}
