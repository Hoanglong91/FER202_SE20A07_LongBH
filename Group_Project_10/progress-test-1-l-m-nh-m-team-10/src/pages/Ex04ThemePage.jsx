/**
 * Ex04ThemePage.jsx – Trang bài 4: Theme Switcher
 *
 * TODO: Import ThemeProvider từ '../context/ThemeContext'
 *       Import ThemeNavbar từ '../components/theme/ThemeNavbar'
 *       Import ThemedCard   từ '../components/theme/ThemedCard'
 *       Import ThemedButton từ '../components/theme/ThemedButton'
 *       Import ThemedInput  từ '../components/theme/ThemedInput'
 *
 *       Bọc toàn bộ trang trong <ThemeProvider>.
 *       Render:
 *         <ThemeNavbar />
 *         Một số ThemedCard chứa ThemedButton và ThemedInput để demo giao diện.
 *
 *       Lưu ý: ThemeProvider nên bọc một <div> áp dụng
 *       background = colors.background và color = colors.text từ useTheme().
 *       Tạo component nội bộ ThemePageContent để đọc colors từ context.
 */
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import ThemeNavbar from '../components/theme/ThemeNavbar';
import ThemedCard from '../components/theme/ThemedCard';
import ThemedButton from '../components/theme/ThemedButton';
import ThemedInput from '../components/theme/ThemedInput';

function ThemePageContent() {
  const { colors } = useTheme();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background, color: colors.text, transition: 'all 0.3s' }}>
      <ThemeNavbar />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Theme Switcher Demo</h2>
        
        <ThemedCard title="Profile">
          <p>This is some information inside a themed card.</p>
          <ThemedButton onClick={() => alert('Saved!')}>Save Changes</ThemedButton>
          <ThemedButton variant="outline" onClick={() => alert('Cancelled!')}>Cancel</ThemedButton>
        </ThemedCard>

        <ThemedCard title="Settings">
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Username</label>
            <ThemedInput placeholder="Enter username" />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <ThemedInput placeholder="Enter email" />
          </div>
        </ThemedCard>

        <ThemedCard title="Statistics">
          <p>Here you can view your statistics.</p>
          <ThemedButton>View Full Stats</ThemedButton>
        </ThemedCard>
      </div>
    </div>
  );
}

export default function Ex04ThemePage() {
  return (
    <ThemeProvider>
      <ThemePageContent />
    </ThemeProvider>
  );
}
