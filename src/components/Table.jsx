import orders from "../data/purchaseorders.json";

export function Table() {
  return (
    <div>
      {orders.mvPurchaseOrders.map((data, key) => {
        return (
          <table className="window-table">
            <tr className="table-row">
              <th className="table-header">Product SKU</th>
              <th className="table-header">Quantity Ordered</th>
              <th className="table-header">Unit Price</th>
              <th className="table-header">Total Amount</th>
            </tr>
            <tr className="table-row">
              <td className="table-entry">
                {data.PurchaseOrderDetails.PurchaseOrderRowProductSKU}
              </td>
              <td className="table-entry">
                {data.PurchaseOrderDetails.PurchaseOrderRowQuantity}
              </td>
              <td className="table-entry">
                {data.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}
              </td>
              <td className="table-entry">
                {data.PurchaseOrderDetails.PurchaseOrderRowTotalAmount}
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}
