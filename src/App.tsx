import './App.css'
import Hero from './components/sections/Hero'
import Layout from './Layout/Layout'
import Portfolio from './components/sections/Portfolio'
import Processus from './components/sections/Processus'
import Temoignages from './components/sections/Temoignages'
import CTA from './components/sections/CTA'

function App() {
  return (
    <Layout hero={<Hero />}>
      <Portfolio />
      <Processus />
      <Temoignages />
      <CTA />
    </Layout>
  )
}

export default App