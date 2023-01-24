import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './components/Main/Main.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={BookList} />
      </Switch>
    </div>
  );
}

export default App;
