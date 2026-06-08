import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';

function App() {
  // Dữ liệu
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 }, 
    { name: 'John', age: 40 }, 
    { name: 'Ann', age: 19 }, 
    { name: 'Elisabeth', age: 16 }
  ];

  // Hàm kiểm tra teenager
  const isTeenager = (person) => {
    return person.age >= 10 && person.age <= 20;
  };

  // 1. Người đầu tiên là teenager
  const findFirstTeenager = () => {
    return people.find(isTeenager);
  };

  // 2. Tất cả teenager
  const findAllTeenagers = () => {
    return people.filter(isTeenager);
  };

  // 3. Kiểm tra tất cả có phải teenager không
  const checkEveryTeenager = () => {
    return people.every(isTeenager);
  };

  // 4. Kiểm tra có ít nhất 1 teenager không
  const checkAnyTeenager = () => {
    return people.some(isTeenager);
  };

  // Gọi hàm
  const firstTeen = findFirstTeenager();
  const allTeen = findAllTeenagers();
  const isEveryTeen = checkEveryTeenager();
  const hasTeen = checkAnyTeenager();

  return (
    <div className="container" style={{ padding: '20px' }}>
      <Hello />
      <hr />

      <h3>Danh sách thành viên:</h3>
      <ListPerson />

      <hr />

      <h3>Kết quả bài tập:</h3>

      <p>
        <b>First teenager:</b>{" "}
        {firstTeen ? `${firstTeen.name} (${firstTeen.age})` : "None"}
      </p>

      <p><b>All teenagers:</b></p>
      <ul>
        {allTeen.map((p, index) => (
          <li key={index}>
            {p.name} ({p.age})
          </li>
        ))}
      </ul>

      <p>
        <b>Every teenager?</b> {isEveryTeen ? "True" : "False"}
      </p>

      <p>
        <b>Has any teenager?</b> {hasTeen ? "True" : "False"}
      </p>
    </div>
  );
}

export default App;