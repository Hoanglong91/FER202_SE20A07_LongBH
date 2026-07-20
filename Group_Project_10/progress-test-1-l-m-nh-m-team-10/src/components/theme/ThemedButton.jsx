/**
 * ThemedButton.jsx – Nút bấm áp dụng màu từ context (Bài 4)
 *
 * Props nhận vào:
 *   - children : ReactNode               – nội dung nút
 *   - onClick  : function (optional)
 *   - variant  : 'primary' | 'outline'   – mặc định 'primary'
 *
 * TODO: Dùng useTheme() từ ThemeContext để lấy colors.
 *       variant='primary'  → background = colors.primary, color = colors.primaryText
 *       variant='outline'  → background = transparent,    color = colors.primary
 *       KHÔNG nhận màu sắc qua props.
 */
import { useTheme } from '../../context/ThemeContext';

export default function ThemedButton({ children, onClick, variant = 'primary' }) {
  const { colors } = useTheme();

  const isPrimary = variant === 'primary';
  const background = isPrimary ? colors.primary : 'transparent';
  const color = isPrimary ? colors.primaryText : colors.primary;
  const border = isPrimary ? 'none' : `1px solid ${colors.primary}`;

  return (
    <button 
      onClick={onClick} 
      style={{
        backgroundColor: background,
        color: color,
        border: border,
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginRight: '0.5rem'
      }}
    >
      {children}
    </button>
  );
}
