import { connectToMetamask, getIsMetamaskInstalled } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "ramda";

// eslint-disab
const MetamaskAuth = () => {
  const dispatch = useDispatch();
  const onConnectToMetamask = compose(dispatch, connectToMetamask);
  const isMetamaskInstalled = useSelector(getIsMetamaskInstalled);
  const userSessionState = useSelector((x) => x.userSessionState);

  const metamaskState = useSelector((x) => x.metamaskProviderState);
  return !isMetamaskInstalled ? (
    <div>
      <p>Please make sure the metamask extension is installed and try again.</p>
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </div>
  ) : metamaskState.status === "disconnected" ||
    userSessionState.walletAddress.length !== 1 ? (
    <div>
      <button onClick={onConnectToMetamask}>Sign In with Metamask</button>
    </div>
  ) : null;
};

export default MetamaskAuth;
