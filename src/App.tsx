import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import './App.css'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<div className="flex items-center justify-center h-screen"><h1>코딩 진도 관리 프로그램</h1></div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
