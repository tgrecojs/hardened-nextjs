import Script from "next/script";

const withHardenedJs = (Component) => (props) => {
  return (
    <div>
      <Script
        async
        type="module"
        src="https://esm.sh/@endo/init@1.0.2"
        strategy="beforeInteractive"
      />
      <Component />
    </div>
  );
};

export default withHardenedJs;
