 import { Route,Switch, Redirect } from "react-router-dom";
 import AllQuote from "./pages/Allqoutes";
 import NewQuote from "./pages/NewQuote";
 import Quotedetail from "./pages/Quotedetail";
 import Layout from "./components/layout/Layout";
 import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
         <Switch>
          <Route path='/' exact>
          <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
              <AllQuote/>
              
          </Route>
          <Route path='/quotes/:quoteId'>
              <Quotedetail/>
          </Route>
          <Route path='/new-quotes'>
              <NewQuote/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
         </Switch>
         </Layout>
    </div>
  );
}

export default App;
