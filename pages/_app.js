import "../styles/globals.css";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure({ ...awsconfig, ssr: true });

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default withAuthenticator(App); //using AWS AMplify default signup form css







