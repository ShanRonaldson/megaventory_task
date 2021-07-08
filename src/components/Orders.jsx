import React from "react";

import Modal from "react-modal";

import orders from "../data/purchaseorders.json";
import { Window } from "../components/Window";

Modal.setAppElement(document.getElementById("root"));

export function Orders() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {orders.mvPurchaseOrders.map((data, key) => {
        return (
          <p key={key} className="orders-list__item" onClick={openModal}>
            {data.PurchaseOrderTypeAbbreviation} - {data.PurchaseOrderNo}
          </p>
        );
      })}

      <Modal
        isOpen={modalIsOpen}
        contentLabel="Purchase Order Information"
        onRequestClose={closeModal}
      >
        <Window />
        <button className="window--close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
