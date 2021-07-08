function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Megaventory Internship Task</h1>
      <h2 className="header__secondary">July 2021</h2>
      <h3 className="header__tertiary">By Shannon Schrauwen</h3>

      <div className="header__task-info">
        <h4 className="header__task">Task Information</h4>
        <p className="task-info">
          In the attached JSON file you will find the response of a
          PurchaseOrderGet call to our API, containing an array of
          mvPurchaseOrders.
          <ol className="task__list">
            <li className="list--item">
              The first goal of this project is to parse the orders and display
              them as links in a list. Each list element’s text should follow
              this format:
              <ol className="nested--list">
                <li className="nested--item">
                  PurchaseOrderTypeAbbreviation – PurchaseOrderNo
                </li>
                
              </ol>
            </li>

            <li className="list--item">
              Clicking each order should open a window which displays some
              information related to the order. The fields you need to include
              in this window are:
              <ol className="nested--list">
                <li className="nested--item">PurchaseOrderAddress</li>
                <li className="nested--item">PurchaseOrderContactPerson</li>

                <li className="nested--item">PurchaseOrderStatus</li>

                <li className="nested--item">
                  PurchaseOrderDetails For this field you should create a table
                  with rows equal to the PurchaseOrderDetails array length,
                  filled with this information: <br />
                  <ol className="nested--list">
                    <li className="nested-item">
                      PurchaseOrderDetails.PurchaseOrderRowProductSKU (as
                      Product SKU)
                    </li>
                    <li className="nested--item">
                      PurchaseOrderDetails.PurchaseOrderRowQuantity (as Quantity
                      Ordered)
                    </li>
                    <li className="nested--item">
                      PurchaseOrderDetails.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount
                      (as Unit Price)
                    </li>
                    <li className="nested--item">
                      PurchaseOrderDetails.PurchaseOrderRowTotalAmount (as Total
                      Amount)
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </p>
      </div>
    </header>
  );
}

export { Header };
