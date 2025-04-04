// // pages/_app.js
// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
// pages/_app.js
import "../styles/globals.css";
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
