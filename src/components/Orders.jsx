import React from "react";

import Modal from "react-modal";

import orders from "../data/purchaseorders.json";
import Window from "../components/Window";

Modal.setAppElement(document.getElementById("root"));

export class Orders extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <ul className="orders-list">
          {orders.mvPurchaseOrders.map((data, key) => {
            return (
              <li
                key={key}
                className="orders-list__item"
                onClick={this.handleOpenModal}
              >
                {data.PurchaseOrderTypeAbbreviation} - {data.PurchaseOrderNo}
              </li>
            );
          })}
        </ul>
        <Modal
          isOpen={this.handleOpenModal}
          contentLabel="Purchase Order Information"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <Window />

          <button onClick={this.handleCloseModal} className="window--close">
            Close
          </button>
        </Modal>
      </div>
    );
  }
}
