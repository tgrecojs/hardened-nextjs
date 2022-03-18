import LendingPoolCard from "../LendingPoolCard/component.js";

const defaultLendingPools = [
  { name: "RUN", borrowRate: 12, supplyRate: 16, amountInPool: 1125000 },
  { name: "BLD", borrowRate: 1.5, supplyRate: 3, amountInPool: 2125000 },
  { name: "ATOM", borrowRate: 2, supplyRate: 2.7, amountInPool: 4125000 },
];

const Dashboard = ({
  headingText = "Default heading text",
  array = defaultLendingPools,
}) => (
  <div>
    <h4>{headingText}</h4>
    {array && array.map((x, i) => <LendingPoolCard key={`key-${i}`} {...x} />)}
  </div>
);

export default Dashboard;
