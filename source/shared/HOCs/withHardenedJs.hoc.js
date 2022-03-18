import Script from "next/script";

const withHardenedJs = (Component) => (props) => {
  return (
    <div>
      <Script
        type="module"
        src="https://cdn.esm.sh/v69/@endo/init@0.5.37/es2021/init.js"
        strategy="afterInteractive"
      />
      <Component />
    </div>
  );
};

export default withHardenedJs;
