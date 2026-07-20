/**
 * ThemeNavbar.jsx – Thanh chọn theme (Bài 4)
 *
 * Import: import { THEME_MODES, THEME_LABELS } from '../../data/themeConfig'
 *
 * TODO: Dùng useTheme() từ ThemeContext để lấy mode, resolvedTheme, colors, changeMode.
 *       Render 3 nút tương ứng THEME_MODES (light / dark / system).
 *       Highlight nút đang active (mode hiện tại).
 *       Hiển thị resolvedTheme đang được áp dụng.
 *       Áp dụng màu nền và màu chữ từ colors.
 *       Component này KHÔNG nhận bất kỳ props nào.
 */
import { THEME_MODES, THEME_LABELS } from '../../data/themeConfig';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeNavbar() {
  const { mode, resolvedTheme, colors, changeMode } = useTheme();

  return (
    <div style={{ backgroundColor: colors.surface, padding: '1rem', borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {THEME_MODES.map(m => (
          <button
            key={m}
            onClick={() => changeMode(m)}
            style={{
              padding: '0.5rem 1rem',
              fontWeight: mode === m ? 'bold' : 'normal',
              backgroundColor: mode === m ? colors.primary : 'transparent',
              color: mode === m ? colors.primaryText : colors.text,
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {THEME_LABELS[m]}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', color: colors.textMuted, display: 'flex', alignItems: 'center' }}>
          Current Theme: 
          <input 
            readOnly 
            value={resolvedTheme} 
            style={{ 
              border: 'none', 
              background: 'transparent', 
              color: 'inherit', 
              outline: 'none', 
              width: '50px',
              fontWeight: 'bold',
              marginLeft: '0.25rem'
            }} 
          />
        </span>
      </div>
    </div>
  );
}
