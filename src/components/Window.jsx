import orders from "../data/purchaseorders.json";
import {Table} from "../components/Table";

export function Window() {
  return (
    <div>
      {orders.mvPurchaseOrders.map((data, key) => {
        return (
          <div className="window">
            <section className="window-items">
              <h4 className="window-items__header">Address</h4>
              <p className="window-items__content" key={key}>
                  {data.PurchaseOrderAddress}
              </p>
            </section>

            <section className="window-items">
              <h4 className="window-items__header">Contact Person</h4>
              <p className="window-items__content" key={key}>{data.PurchaseOrderContactPerson}</p>
            </section>
            <section className="window-items">
              <h4 className="window-items__header">Status</h4>
              <p className="window-items__content" key={key}>{data.PurchaseOrderStatus}</p>
            </section>
            <section className="window-items">
              <h4 className="window-items__header">Details</h4>

            </section>


          </div>
        );
      })}
    </div>
  );
}
