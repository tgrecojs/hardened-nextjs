import React, { useCallback } from "react";
import { makeReactAgoricWalletConnection } from "@agoric/wallet-connection/react.js";

// Create a wrapper for agoric-wallet-connection that is specific to
// the app's instance of React.
const AgoricWalletConnection = makeReactAgoricWalletConnection(React);

const MyWalletConnection = ({ connecting }) => {
  const onWalletState = useCallback((ev) => {
    /* similar to above */
  }, []);
  return <AgoricWalletConnection onState={onWalletState} />;
};

export default MyWalletConnection;
