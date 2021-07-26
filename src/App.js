
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/";
import Today from "./pages/Today/";
import Addevent from "./pages/Addevent/";
import EventForm from "./components/eventForm";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/today" component={Today} />
        <Route path="/add-event" component={Addevent} />
        <Route path="/event-form" component={EventForm} />
      </Switch>
    </main>
  );
}

export default App;
