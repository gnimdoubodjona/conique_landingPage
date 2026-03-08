import { useState } from 'react'
import './App.css'
import Hero from './components/sections/Hero'
import Layout from './Layout'
import Portfolio from './components/sections/Portfolio'
import Processus from './components/sections/Processus'
import Temoignages from './components/sections/Temoignages'
import CTA from './components/sections/CTA'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Hero />
        <Portfolio />
        <Processus />
        <Temoignages/>
        <CTA/>
      </Layout>
    </>
  )
}

export default App
