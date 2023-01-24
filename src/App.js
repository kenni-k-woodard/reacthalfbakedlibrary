import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main.js';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <div className="App">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </div>
  );
}

export default App;
