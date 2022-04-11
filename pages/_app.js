import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { object } from "prop-types";

function MyApp({
  // eslint-disable-next-line react/prop-types
  Component,
  pageProps,
  reduxStore,
}) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
MyApp.propTypes = {
  pageProps: object,
  reduxStore: object,
};

export default withReduxStore(MyApp);
