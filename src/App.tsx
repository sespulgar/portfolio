import { RoutePages } from "./routes/routePages";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RoutePages />
    </ThemeProvider>
  );
}

export default App;
