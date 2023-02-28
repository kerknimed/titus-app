import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExpenseForm from './pages/ExpenseForm';
import List from './pages/List';
import Header from './components/Header';

function App() {
  return (
    <>
      <Switch>
        <Route path='/expense'>
          <Header />
          <ExpenseForm />
        </Route>
        <Route path='/list'>
          <Header />
          <List />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
