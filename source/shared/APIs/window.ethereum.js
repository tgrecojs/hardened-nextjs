import detectEthereumProvider from "@metamask/detect-provider";

const requestEthAccount = async () => {
  // eslint-disable-next-line no-undef
  const user = await ethereum.request({ method: "eth_requestAccounts" });
  console.log("user:: inside requestEthAccount", { user });
  return user;
};

const watchChainId = async () => {
  // eslint-disable-next-line no-undef
  const listener = await ethereum.request("accountsChanged", () =>
    window.location.reload()
  );
  return listener;
};

export { requestEthAccount, watchChainId };
