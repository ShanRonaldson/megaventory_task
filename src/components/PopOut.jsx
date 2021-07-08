import orders from "../data/purchaseorders.json";
import styled from "styled-components";

//styles

const StyledPopOut = styled.div`
  background-color: #f9f9f9;
  margin-top: 1rem;
  margin-left: 5rem;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 10rem;
  background-color: #CDF0EA;
`;

const StyledTableEntry = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: center;
`;

export function PopOut(props) {
  return (
    <StyledPopOut>
      {orders.mvPurchaseOrders
        .filter((order) => order.PurchaseOrderId === props.selectedItem)
        .map((filteredOrders) => {
          return (
            <StyledPopOut className="window">
              <section className="window-items">
                <h4 className="window-items__header">Address</h4>
                <p className="window-items__content">
                  {filteredOrders.PurchaseOrderAddress}
                </p>
              </section>

              <section className="window-items">
                <h4 className="window-items__header">Contact Person</h4>
                <p className="window-items__content">
                  {filteredOrders.PurchaseOrderContactPerson}
                </p>
              </section>
              <section className="window-items">
                <h4 className="window-items__header">Status</h4>
                <p className="window-items__content">
                  {filteredOrders.PurchaseOrderStatus}
                </p>
              </section>
              <section className="window-items">
                <h4 className="window-items__header">Details</h4>

                <StyledTable className="window-table">
                  <tr className="table-row">
                    <StyledTableHeader className="table-header">
                      Product SKU
                    </StyledTableHeader>
                    <StyledTableHeader className="table-header">
                      Quantity Ordered
                    </StyledTableHeader>
                    <StyledTableHeader className="table-header">
                      Unit Price
                    </StyledTableHeader>
                    <StyledTableHeader className="table-header">
                      Total Amount
                    </StyledTableHeader>
                  </tr>

                  {filteredOrders.PurchaseOrderDetails.map((detail) => {
                    return (
                      <tr className="table-row">
                        <StyledTableEntry className="table-entry">
                          {detail.PurchaseOrderRowProductSKU}
                        </StyledTableEntry>
                        <StyledTableEntry className="table-entry">
                          {detail.PurchaseOrderRowQuantity}
                        </StyledTableEntry>
                        <StyledTableEntry className="table-entry">
                          {detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}
                        </StyledTableEntry>
                        <StyledTableEntry className="table-entry">
                          {detail.PurchaseOrderRowTotalAmount}
                        </StyledTableEntry>
                      </tr>
                    );
                  })}
                </StyledTable>
              </section>
            </StyledPopOut>
          );
        })}
    </StyledPopOut>
  );
}
