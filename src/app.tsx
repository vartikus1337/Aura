import { createRoot } from "react-dom/client";
import {
	// NavItem,
	BlackBtn,
} from "./ui";

const App = () => <BlackBtn>Кошелёк</BlackBtn>;

// biome-ignore lint/style/noNonNullAssertion: root garanted
createRoot(document.getElementById("root")!).render(<App />);
