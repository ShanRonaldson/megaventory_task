export const Orders = ({ type, orderNo }) => {
  return (
    <ul className="orders-list">
      <li className="orders-list__item">
        {type} - {orderNo}
      </li>
    </ul>
  );
};
