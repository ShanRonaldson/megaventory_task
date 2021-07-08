// from stackoverflow: how to parse json file
// https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file/33650470#33650470

import orders from "../data/purchaseorders.json";
import {Orders} from "../components/Orders";

export function RenderOrders() {
  return (
    <div className="orders">
      {orders.mvPurchaseOrders.map((data, key) => {
        return (
          <div key={key}>
            <Orders
              key={key}
              orderType={data.PurchaseOrderTypeAbbreviation}
              orderNo={data.PurchaseOrderNo}
            />
          </div>
        );
      })}
    </div>
  );
}
