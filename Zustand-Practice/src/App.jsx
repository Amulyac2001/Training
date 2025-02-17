import './App.css'
import ThemeToggler from './ThemeToggler'
import useThemeStore from './store/themeStore';

function App() {
  const { theme, toggleTheme } = useThemeStore();
  return(
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <ThemeToggler />
    </div>
  )
}

export default App
