import { fork, call, all, spawn } from "redux-saga/effects";
import web3ConnectionWatcher from "../HOCs/withWeb3/saga";
import watchFetchMetamaskAccount from "../../features/MetamaskAuth/saga";
import watchStartEthereumConnection from "../jsonRpcConnections/metamask";

export default function* root() {
  yield spawn(watchStartEthereumConnection);
  yield spawn(web3ConnectionWatcher);
  yield fork(watchFetchMetamaskAccount);
}
