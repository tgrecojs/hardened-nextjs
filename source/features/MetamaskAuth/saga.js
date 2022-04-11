import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  reportError,
  reportMetamaskConnectionSuccess,
  disconnectWallet,
  setWalletAddress,
  setChainId,
  completeStep,
} from "./reducer";
import isEmpty from "crocks/predicates/isEmpty";

import { requestEthAccount } from "../../shared/APIs/window.ethereum";
import { ethRpcActions } from "../../shared/jsonRpcConnections/metamask";

export function* handleMetamaskConnection() {
  try {
    const user = yield call(requestEthAccount);
    yield put(reportMetamaskConnectionSuccess(user));
  } catch (error) {
    yield put(reportError(error));
  }
}

function* handleConnectionDetails(action) {
  yield put(setWalletAddress(action.payload));
  yield put(setChainId(window.ethereum.chainId));
}

function* handleNetworkChanged(action) {
  const { chainId, selectedAddress } = action.payload;
  yield put(setChainId(chainId));
  yield put(setWalletAddress(selectedAddress));
}

// eslint-disable-next-line no-unused-vars
function* handleAccountChanged(action) {
  const { payload } = action;
  console.log("inside handleaccoutnChanged", action);
  if (!isEmpty(payload)) {
    yield put(setWalletAddress(payload));
  } else {
    yield put(disconnectWallet());

    yield put(setWalletAddress([]));
  }
}

function* watchFetchMetamaskAccount() {
  yield takeLatest(
    reportMetamaskConnectionSuccess().type,
    handleConnectionDetails
  );
  yield all([
    takeLatest(ethRpcActions.networkChanged, handleNetworkChanged),
    takeLatest(ethRpcActions.accountChanged, handleAccountChanged),
  ]);
}

export default watchFetchMetamaskAccount;
