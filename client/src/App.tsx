import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import IntegrationStrategiesPage from "@/pages/IntegrationStrategiesPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/integrations" component={IntegrationStrategiesPage} />
      {/* Add more routes as needed */}
    </Switch>
  );
}

export default App;

