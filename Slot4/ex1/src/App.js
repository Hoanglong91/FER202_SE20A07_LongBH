import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/Footer';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './components/Pizza';
import { pizzaList } from './data/pizzaData';

function App() {

    return (
    <div className="container">
      <h2 className="text-center my-4">Pizza Menu</h2>

      <div className="row">
        {pizzaList.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <Pizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;