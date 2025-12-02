import { createRoot } from "react-dom/client";
import { NavItem } from "./ui";

const App = () => <NavItem href="#">Авторы</NavItem>;

// biome-ignore lint/style/noNonNullAssertion: root garanted
createRoot(document.getElementById("root")!).render(<App />);
