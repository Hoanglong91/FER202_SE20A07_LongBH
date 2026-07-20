# Redux Toolkit — Lab 06 (redux-rtk-demo)

Ứng dụng ReactJS sử dụng **Redux Toolkit** và **React-Bootstrap** minh họa 3 tính năng quản lý state chính:

1. **Counter**: State đồng bộ đơn giản (số đếm).
2. **Todos**: Thao tác trên mảng state (thêm, toggle, xóa).
3. **Posts**: Gọi API bất đồng bộ với `createAsyncThunk` và `extraReducers`.

## Hướng dẫn cài đặt và chạy ứng dụng

### 1. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 2. Chạy ứng dụng ở môi trường Development
```bash
npm run dev
```
Sau đó truy cập: `http://localhost:5173`

### 3. Biên dịch ứng dụng cho Production
```bash
npm run build
```

## Cấu trúc thư mục

```
src/
├── app/
│   └── store.js         # Khởi tạo Redux Store
├── features/
│   ├── counter/         # Feature 1: Counter slice & component
│   ├── todos/           # Feature 2: Todos slice & component
│   └── posts/           # Feature 3: Posts async thunk slice & component
├── App.jsx              # Giao diện chính chứa 3 feature components
└── main.jsx             # Điểm đầu vào bọc Provider store và import Bootstrap CSS
```
