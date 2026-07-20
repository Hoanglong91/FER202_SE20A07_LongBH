/**
 * CounterDisplay.jsx – Hiển thị giá trị đếm hiện tại (Bài 1)
 *
 * TODO: Dùng useCounter() từ CounterContext để lấy count.
 *       Hiển thị giá trị count ra màn hình.
 *       Component này KHÔNG nhận bất kỳ props nào.
 */ 
// src/components/counter/CounterDisplay.jsx
import { useCounter } from "../../context/CounterContext";

export default function CounterDisplay() {
  // TODO: Dùng useCounter() để lấy count
  const { count } = useCounter();

  // TODO: Hiển thị giá trị count ra màn hình
  return (
    <div>
      <h3>Current Count:</h3>
      <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{count}</p>
    </div>
  );
}
