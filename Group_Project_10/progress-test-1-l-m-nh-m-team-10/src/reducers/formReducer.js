/**
 * formReducer.js – Reducer quản lý form đăng ký (Bài 3)
 *
 * Import: import { validateField } from '../utils/validators'
 *
 * TODO 1: Khai báo initialState
 *         {
 *           values:  { fullName: '', email: '', password: '', confirmPassword: '' },
 *           errors:  { fullName: '', email: '', password: '', confirmPassword: '' },
 *           touched: { fullName: false, email: false, password: false, confirmPassword: false },
 *           status: 'idle'   // 'idle' | 'submitting' | 'success' | 'error'
 *         }
 *
 * TODO 2: Viết formReducer(state, action) xử lý 4 action:
 *
 *   'CHANGE' – { field, value }
 *     → Cập nhật values[field]
 *     → Nếu touched[field] === true: validate lại field đó
 *     → Nếu field === 'password' và touched.confirmPassword: validate lại confirmPassword
 *
 *   'BLUR' – { field }
 *     → Đánh dấu touched[field] = true
 *     → Validate field đó và cập nhật errors[field]
 *
 *   'VALIDATE_ALL'
 *     → Validate tất cả fields, cập nhật errors và touched
 *     → Nếu có lỗi: status = 'error'
 *
 *   'SET_STATUS' – { status }
 *     → Cập nhật status
 *
 *   'RESET'
 *     → Trả về initialState
 *
 * Export: formReducer (default hoặc named), initialState
 */
import { validateField } from '../utils/validators'

export const initialState = {
  values: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  errors: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  touched: {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false
  },
  status: 'idle'
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      const { field, value } = action.payload
      const newValues = { ...state.values, [field]: value }
      let newErrors = { ...state.errors }

      if (state.touched[field]) {
        newErrors[field] = validateField(field, value, newValues)
      }

      if (field === 'password' && state.touched.confirmPassword) {
        newErrors.confirmPassword = validateField('confirmPassword', state.values.confirmPassword, newValues)
      }

      return {
        ...state,
        values: newValues,
        errors: newErrors
      }
    }

    case 'BLUR': {
      const { field } = action.payload
      return {
        ...state,
        touched: { ...state.touched, [field]: true },
        errors: { ...state.errors, [field]: validateField(field, state.values[field], state.values) }
      }
    }

    case 'VALIDATE_ALL': {
      const newErrors = {
        fullName: validateField('fullName', state.values.fullName, state.values),
        email: validateField('email', state.values.email, state.values),
        password: validateField('password', state.values.password, state.values),
        confirmPassword: validateField('confirmPassword', state.values.confirmPassword, state.values)
      }
      const hasError = Object.values(newErrors).some(error => error)
      return {
        ...state,
        errors: newErrors,
        touched: {
          fullName: true,
          email: true,
          password: true,
          confirmPassword: true
        },
        status: hasError ? 'error' : 'success'
      }
    }

    case 'SET_STATUS':
      return { ...state, status: action.payload.status }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

export default formReducer 