import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Writings from './pages/Writings'
import TennisArticle from './pages/articles/TennisArticle'
import LeadershipArticle from './pages/articles/LeadershipArticle'
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/writings/tennis" element={<TennisArticle />} />
        <Route path="/writings/leadership" element={<LeadershipArticle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppContainer>
  )
}

export default App
