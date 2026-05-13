import logo from './logo.svg';
import './App.css';

function App() {
  let chao1 = (name) => { console.log("Xin chao, " + name + "!"); }
  // khai báo 1 đối tượng person có các thuộc tính id, name age, address
  let person = {
    id: 1,
    name: "Hoang Long",
    age: 21,
    address: "Quang Binh"
  };
  // in thông tin của đối tượng person ra thẻ card trong react

  return (
    <>
    <h1>  
      Xin chào tôi là Long
    </h1>
    <h2>
      Tôi học FPT
    </h2>
    <button onClick={() => chao1("Long")}>
      Greeting
    </button>
    <div className="card">
      <p>ID: {person.id}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Address: {person.address}</p>
    </div>
    </>
    
  )
}

export default App;
