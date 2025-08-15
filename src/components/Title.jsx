import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sartak's Portfolio</title>
      </Helmet>
      <h1>Hello</h1>
    </HelmetProvider>
  );
}