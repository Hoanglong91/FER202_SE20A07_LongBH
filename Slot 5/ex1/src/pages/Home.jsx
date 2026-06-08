import MyCarousel from '../components/MyCarousel';
import Pizza from '../components/Pizza';
import { pizzaList } from '../data/pizzaData';

function Home() {
  return (
    <>
      <MyCarousel />

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
    </>
  );
}

export default Home;