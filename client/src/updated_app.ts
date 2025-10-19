import { Route, Switch } from "wouter";
import MoofarHome from "@/pages/MoofarHome";
import MoofarAbout from "@/pages/MoofarAbout";
import MoofarServices from "@/pages/MoofarServices";
import MoofarContact from "@/pages/MoofarContact";
import IntegrationStrategiesPage from "@/pages/IntegrationStrategiesPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={MoofarHome} />
      <Route path="/about" component={MoofarAbout} />
      <Route path="/services" component={MoofarServices} />
      <Route path="/contact" component={MoofarContact} />
      <Route path="/integrations" component={IntegrationStrategiesPage} />
      {/* 404 fallback */}
      <Route component={() => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">404 - Page Not Found</h1></div>} />
    </Switch>
  );
}

export default App;