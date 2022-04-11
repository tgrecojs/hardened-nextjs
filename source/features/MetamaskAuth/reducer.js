import autodux from 'autodux'
import dsm from 'redux-dsm'

const CONNECTED = 'connected'
const DISCONNECTED = 'disconnected'
const FETCHING = 'fetching provider'
const ERROR = 'error'

const fetchMetamaskProviderStates = [
  'initial',
  DISCONNECTED,
  [
    'fetch account',
    FETCHING,
    ['report error', ERROR, ['handle error', DISCONNECTED]],
    ['report success', CONNECTED, ['disconnect wallet', DISCONNECTED]]
  ]
]

const mintDSM = dsm({
  component: 'metamask provider',
  description: 'establish wallet connection',
  actionStates: fetchMetamaskProviderStates
})

const {
  actionCreators: {
    fetchAccount: connectToMetamask,
    reportError,
    reportSuccess: reportMetamaskConnectionSuccess,
    handleError,
    disconnectWallet
  },
  reducer
} = mintDSM

const getConnectionStatus = ({ metamaskProviderState }) =>
  metamaskProviderState.status
const getConnectionPayload = ({ metamaskProviderState }) =>
  metamaskProviderState.payload

export {
  CONNECTED,
  DISCONNECTED,
  getConnectionStatus,
  getConnectionPayload,
  connectToMetamask,
  reportError,
  reportMetamaskConnectionSuccess,
  handleError,
  disconnectWallet,
  reducer
}

const ethNetworkLookup = { 1: 'mainnet', 3: 'ropsten', 4: 'rinkeby' }

// need to seperate this out to its own module
export const {
  reducer: web3Reducer,
  initial,
  slice,
  actions: {
    setChainId,
    setWalletAddress,
    setEthProvider,
    setError,
    setFleekMedia,
    setFleekMetadata,
    setZoraResponseData,
    setIsMetamaskInstalled,
    completeStep
  },
  selectors: {
    getChainName,
    getWalletAddress,
    getIsMetamaskInstalled,
    getWeb3,
    getChainId,
    getError: getEthProviderError,
    getFleekMedia,
    getFleekMetadata,
    getZoraResponseData
  }
} = autodux({
  slice: 'userSessionState',
  initial: {
    error: null,
    isMetamaskInstalled: {},
    walletAddress: [],
    chainId: null,
    fleekMedia: {},
    fleekMetadata: {},
  },
  actions: {
    setChainId: (state, payload) => ({
      ...state,
      chainId: payload,
      chainName: ethNetworkLookup[parseInt(payload)]
    }),
    setUserInfo: (s, x) => ({ ...s, userInfo: x })
  },
  selectors: {
    getChainName: (s) => s.chainName
  }
})

export default mintDSM
