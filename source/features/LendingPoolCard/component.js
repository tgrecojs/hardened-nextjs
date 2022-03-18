const LendingPoolCard = ({ name, supplyRate, borrowRate }) => (
  <div>
    <h3>{name}</h3>
    <ul>
      <li>Supply Rate :${supplyRate}</li>
      <li>Borrow Rate :${borrowRate}</li>
    </ul>
  </div>
);
export default LendingPoolCard;
