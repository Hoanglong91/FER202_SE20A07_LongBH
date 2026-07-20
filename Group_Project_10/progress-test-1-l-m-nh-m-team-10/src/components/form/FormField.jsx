/**
 * FormField.jsx – Input field tái sử dụng cho form đăng ký (Bài 3)
 *
 * Props nhận vào:
 *   - name        : string  – tên field (khớp với key trong state.values)
 *   - label       : string  – nhãn hiển thị
 *   - type        : string  – loại input ('text' | 'email' | 'password'), mặc định 'text'
 *   - placeholder : string  – placeholder text
 *
 * TODO: Dùng useFormContext() từ FormContext để lấy state và dispatch.
 *       Đọc: state.values[name], state.errors[name], state.touched[name]
 *
 *       Khi onChange: dispatch action CHANGE với { field: name, value }
 *       Khi onBlur:   dispatch action BLUR  với { field: name }
 *
 *       Hiển thị thông báo lỗi CHỈ KHI field đã được touched VÀ có lỗi.
 *       Đổi màu viền input theo trạng thái: lỗi (đỏ) / hợp lệ (xanh) / mặc định.
 */
import { useFormContext } from '../../context/FormContext'

export default function FormField({ name, label, type = 'text', placeholder }) {
  const { state, dispatch } = useFormContext()

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE', payload: { field: name, value: e.target.value } })
  }

  const handleBlur = () => {
    dispatch({ type: 'BLUR', payload: { field: name } })
  }

  const hasError = state.touched[name] && state.errors[name]
  const isValid = state.touched[name] && !state.errors[name]

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={state.values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          border: hasError ? '1px solid red' : isValid ? '1px solid green' : '1px solid #ccc'
        }}
      />
      {hasError && <span style={{ color: 'red' }}>{state.errors[name]}</span>}
    </div>
  )
}
