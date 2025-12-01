import { createRoot } from "react-dom/client";

const App = () => <h1 className="text-9xl">Hello world!</h1>;

// biome-ignore lint/style/noNonNullAssertion: root garanted
createRoot(document.getElementById("root")!).render(<App />);
