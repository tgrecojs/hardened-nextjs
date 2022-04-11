import { establishConnectionSuccess, establishConnection } from "./reducer";
import {
  connectToMetamask,
  setChainId,
  setIsMetamaskInstalled,
} from "../../../features/MetamaskAuth/reducer";
//features/MetamaskAuth/reducer";
import { handleMetamaskConnection } from "../../../features/MetamaskAuth/saga";
///MetamaskAuth/saga";
import { isMetaMaskInstalled } from "../../jsonRpcConnections/metamask";
import { put, takeLatest } from "redux-saga/effects";

export function* handleWeb3Connection() {
  console.log("insidhe handleweb3connection");
  if (!isMetaMaskInstalled()) {
    yield put(setIsMetamaskInstalled(false));
  } else {
    const { ethereum } = window;
    yield put(
      establishConnectionSuccess({
        chainId: ethereum.chainId,
        selectedAddress: ethereum.selectedAddress,
      })
    );
    yield put(setIsMetamaskInstalled(true));
  }
}

function* handleConnectedUser(action) {
  const { payload } = action;
  if (payload.selectedAddress) yield put(connectToMetamask());
  const { ethereum } = window;
  yield setChainId(ethereum.chainId);
}

function* web3ConnectionWatcher() {
  yield takeLatest(establishConnection().type, handleWeb3Connection);
  yield takeLatest(connectToMetamask().type, handleMetamaskConnection);
  yield takeLatest(establishConnectionSuccess().type, handleConnectedUser);
}

export default web3ConnectionWatcher;
