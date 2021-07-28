import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import EventForm from "./pages/Eventform";
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin/login";
import ThankYou from "./pages/Thankyou";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/today" component={Today} />
        <Route path="/event-form" component={EventForm} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
    </main>
  );
}

export default App;
