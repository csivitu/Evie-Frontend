import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import EventForm from "./pages/Eventform";
import Admin from "./pages/admin";
import ThankYou from "./pages/Thankyou";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/today" component={Today} />
        <Route path="/event-form" component={EventForm} />
        <Route path="/admin" component={Admin} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
    </main>
  );
}

export default App;
