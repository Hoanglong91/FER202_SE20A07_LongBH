/**
 * CounterControls.jsx – Các nút điều khiển bộ đếm (Bài 1)
 *
 * TODO: Dùng useCounter() từ CounterContext để lấy increment, decrement, reset.
 *       Render 3 nút: Tăng (+), Giảm (−), Reset.
 *       Component này KHÔNG nhận bất kỳ props nào.
 */
// src/components/counter/CounterControls.jsx
import { useCounter } from "../../context/CounterContext";

export default function CounterControls() {
  // TODO: Dùng useCounter() để lấy các hàm
  const { increment, decrement, reset } = useCounter();

  // TODO: Render 3 nút với onClickHandlers tương ứng
  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={increment} style={{ marginRight: "0.5rem" }}>
        + (Increment)
      </button>
      <button onClick={decrement} style={{ marginRight: "0.5rem" }}>
        − (Decrement)
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
