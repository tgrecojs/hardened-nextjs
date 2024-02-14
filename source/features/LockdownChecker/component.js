const LockdownChecker = ({ globalRef = Array.prototype }) => {
  return (
    <div>
      <h2>Globals is frozen::: {Object.isFrozen(globalRef)}</h2>
      <select>
        <option>Array</option>
      </select>
    </div>
  );
};
export default LockdownChecker;
