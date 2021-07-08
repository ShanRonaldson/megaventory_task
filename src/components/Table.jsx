export function Table(props) {
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
                {props.sku}
              </td>
              <td className="table-entry">
                {props.quantity}
              </td>
              <td className="table-entry">
                {props.price}
              </td>
              <td className="table-entry">
               {props.total}
              </td>
            </tr>
          </table>

  );
}
