
import {
  ThemeProvider,
} from "./components/theme-provider";
import { Pages } from "./routes/Pages";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Pages />
    </ThemeProvider>
  );
}

export default App;
