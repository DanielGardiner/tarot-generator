import "/styles/reset.css";
import "/styles/fonts.css";
import GlobalStyles from "/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
