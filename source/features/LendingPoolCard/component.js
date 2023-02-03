import PoolStatus from "../../shared/PoolStatus/component";

const LendingPoolCard = ({ name, supplyRate, borrowRate, poolStatus }) => (
  <div>
    <h3>{name}</h3>
    <ul>
      <li>Supply Rate :${supplyRate}</li>
      <li>Borrow Rate :${borrowRate}</li>
      <li>Pool Status: <PoolStatus poolStatus={poolStatus} /></li>
    </ul>
  </div>
);
export default LendingPoolCard;
