import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="container">
            <h2>MERN-Stack Todo App</h2>
          </div>
          {/* <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={TodosList} />
          <Route exact path="/edit/:id" component={EditTodo} />
          <Route exact path="/create" component={CreateTodo} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
