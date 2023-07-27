import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    // Here you can include any global providers or layouts
    // that should be shared across all pages.
  
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
  