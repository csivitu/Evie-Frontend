import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/";
import Today from "./pages/Today/";
import Addevent from "./pages/Addevent/";
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/today" component={Today} />
        <Route path="/add-event" component={Addevent} />
      </Switch>
    </main>
  );
}

export default App;
