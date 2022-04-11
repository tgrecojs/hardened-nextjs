import dsm from "redux-dsm";

const CONNECTED = "connected";
const DISCONNECTED = "disconnected";

const web3ConnectionStates = [
  "initial",
  DISCONNECTED,
  [
    "establish connection",
    "connecting",
    ["establish connection failed", DISCONNECTED],
    [
      "establish connection success",
      CONNECTED,
      ["remove connection", DISCONNECTED],
    ],
  ],
];

const web3Connection = dsm({
  component: "connect to web3",
  description: "prepares application for web3 wallet integration",
  actionStates: web3ConnectionStates,
});

const {
  actionCreators: {
    removeConnection,
    establishConnection,
    establishConnectionSuccess,
    establishConnectionFailed,
    establishSuccess,
  },
  reducer,
} = web3Connection;

export {
  removeConnection,
  establishConnection,
  establishConnectionSuccess,
  establishConnectionFailed,
  establishSuccess,
  reducer,
};
