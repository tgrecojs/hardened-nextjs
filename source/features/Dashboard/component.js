import LendingPoolCard from "../LendingPoolCard/component.js";

const defaultLendingPools = [
  { name: "RUN", borrowRate: 12, supplyRate: 16, poolStatus: 'inactive', amountInPool: 1125000 },
  { name: "BLD", borrowRate: 1.5, supplyRate: 3, poolStatus: 'active', amountInPool: 2125000 },
  { name: "ATOM", borrowRate: 2, supplyRate: 2.7, poolStatus: 'inactive', amountInPool: 4125000 },
  { name: "OSMO", borrowRate: 2, supplyRate: 3.7, poolStatus: 'inactive', amountInPool: 7204200 },
];

const Dashboard = ({
  headingText = "Next.js with Hardened-JS Sample Application! :)",
  array = defaultLendingPools,
}) => (
  <div>
    <h4>{headingText}</h4>
    {array && array.map((x, i) => <LendingPoolCard key={`key-${i}`} {...x} />)}
  </div>
);

export default Dashboard;
