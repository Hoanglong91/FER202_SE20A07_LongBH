/**
 * RegistrationForm.jsx – Form đăng ký với validation (Bài 3)
 *
 * TODO: Dùng useFormContext() từ FormContext để lấy state và dispatch.
 *
 *       Render 4 FormField:
 *         - fullName        label="Họ và tên"
 *         - email           label="Email"           type="email"
 *         - password        label="Mật khẩu"        type="password"
 *         - confirmPassword label="Xác nhận mật khẩu" type="password"
 *
 *       Khi submit (handleSubmit):
 *         1. Dispatch VALIDATE_ALL để hiện toàn bộ lỗi
 *         2. Kiểm tra xem còn lỗi không – nếu có thì return sớm
 *         3. Dispatch SET_STATUS 'submitting'
 *         4. Giả lập API call (setTimeout 1000ms)
 *         5. Dispatch SET_STATUS 'success'
 *
 *       Khi status === 'success': hiển thị thông báo thành công và nút "Đăng ký lại"
 *         - Nút "Đăng ký lại": dispatch RESET
 *
 *       Khi status === 'error': hiển thị banner lỗi phía trên nút submit.
 *
 *       Nút submit: disabled khi status === 'submitting'.
 */
import { useEffect, useRef } from 'react'
import { useFormContext } from '../../context/FormContext'
import FormField from './FormField'

export default function RegistrationForm() {
  const { state, dispatch } = useFormContext()
  const isProcessingRef = useRef(false)

  useEffect(() => {
    // If status changed to 'error', stop processing
    if (state.status === 'error') {
      isProcessingRef.current = false
      return
    }

    // If we're in the middle of validating/submitting, skip
    if (isProcessingRef.current) return
    if (state.status === 'submitting' || state.status === 'success') return

    // Check if all fields were touched (indicating VALIDATE_ALL was called)
    const allTouched = Object.values(state.touched).every(v => v)
    if (!allTouched) return

    // Check if there are any errors
    const hasErrors = Object.values(state.errors).some(error => error)

    if (hasErrors) {
      return
    }

    // No errors, proceed with submission
    isProcessingRef.current = true
    dispatch({ type: 'SET_STATUS', payload: { status: 'submitting' } })

    const timer = setTimeout(() => {
      dispatch({ type: 'SET_STATUS', payload: { status: 'success' } })
      isProcessingRef.current = false
    }, 1000)

    return () => clearTimeout(timer)
  }, [state.status, state.errors, state.touched, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'VALIDATE_ALL' })
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Đăng ký</h2>

      {state.status === 'success' ? (
        <div>
          <div style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '15px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            ✓ Đăng ký thành công!
          </div>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Đăng ký lại
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {state.status === 'error' && (
            <div style={{
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px',
              borderRadius: '4px',
              marginBottom: '10px'
            }}>
              ✗ Vui lòng kiểm tra lại các trường
            </div>
          )}

          <FormField
            name="fullName"
            label="Họ và tên"
          />

          <FormField
            name="email"
            label="Email"
            type="email"
          />

          <FormField
            name="password"
            label="Mật khẩu"
            type="password"
          />

          <FormField
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            type="password"
          />

          <button
            type="submit"
            disabled={state.status === 'submitting'}
            style={{
              padding: '10px',
              backgroundColor: state.status === 'submitting' ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: state.status === 'submitting' ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {state.status === 'submitting' ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </form>
      )}
    </div>
  )
}
