import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import EventForm from "./pages/Eventform";
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin/login";
import ThankYou from "./pages/Thankyou";
import Verify from "./pages/Verify";
import { RegisterSW } from "./components/serviceWorker";

function App() {
  RegisterSW();
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/today" component={Today} />
        <Route path="/addevent" component={EventForm} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={AdminLogin} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/verify" component={Verify} />
      </Switch>
    </main>
  );
}

export default App;
