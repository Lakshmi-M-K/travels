import Layout from "./components/Layout/Layout";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

<GoogleOAuthProvider clientId="878519185217-urk574fr4qg2debc6cop5pjr99dovgrf.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>;
function App() {
  return <Layout />;
}

export default App;
