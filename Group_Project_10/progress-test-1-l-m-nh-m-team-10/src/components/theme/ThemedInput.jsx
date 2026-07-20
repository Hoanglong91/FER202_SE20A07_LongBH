/**
 * ThemedInput.jsx – Input áp dụng màu từ context (Bài 4)
 *
 * Props nhận vào:
 *   - placeholder : string (optional)
 *
 * TODO: Dùng useTheme() từ ThemeContext để lấy colors.
 *       Áp dụng colors.background, colors.border, colors.text lên input.
 *       KHÔNG nhận màu sắc qua props.
 */
import { useTheme } from '../../context/ThemeContext';

export default function ThemedInput({ placeholder }) {
  const { colors } = useTheme();

  return (
    <input 
      placeholder={placeholder} 
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        padding: '0.5rem',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    />
  );
}
