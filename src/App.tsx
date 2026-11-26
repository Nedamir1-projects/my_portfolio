import SkillsPage from "./SkillsPage";
import PortfolioPage from "./components/PortfolioPage";
import { LanguageProvider } from "./language-context";

function App() {
  const isSkillsPage =
    window.location.pathname.replace(/\/+$/, "") === "/skills";
  return (
    <LanguageProvider>
      {isSkillsPage ? <SkillsPage /> : <PortfolioPage />}
    </LanguageProvider>
  );
}

export default App;
