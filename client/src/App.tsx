import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Games from "./pages/Games";
import AboutUs from "./pages/AboutUs";
import HowToPlay from "./pages/HowToPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Leaderboard from "./pages/Leaderboard";
import Achievements from "./pages/Achievements";
import PokerGame from "./pages/games/PokerGame";
import SlotsGame from "./pages/games/SlotsGame";
import RouletteGame from "./pages/games/RouletteGame";
import ScratchGame from "./pages/games/ScratchGame";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/games"} component={Games} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/how-to-play"} component={HowToPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/disclaimer"} component={Disclaimer} />
      <Route path={"/leaderboard"} component={Leaderboard} />
      <Route path={"/achievements"} component={Achievements} />
      <Route path={"/play/poker"} component={PokerGame} />
      <Route path={"/play/slots"} component={SlotsGame} />
      <Route path={"/play/roulette"} component={RouletteGame} />
      <Route path={"/play/scratch"} component={ScratchGame} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />

          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
