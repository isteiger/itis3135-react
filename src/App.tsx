import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contract from './pages/Contract'
import WebsiteEvaluations from './pages/WebsiteEvaluations'
import Survey from './pages/Survey'
import Gallery from './pages/Gallery'
import Cards from './pages/Cards'
import Inventory from './pages/Inventory'
import Instructions from './pages/Instructions'
import IntroForm from './pages/IntroForm'
import Product from './pages/Product'
import Highlight from './pages/Highlight'
import CrappyPage from './pages/CrappyPage'
import Hobby from './pages/Hobby'
import IsteigerDesign from './pages/IsteigerDesign'
import Slideshow from './pages/Slideshow'

const pageTitles: Record<string, string> = {
  '/': 'Course Home',
  '/contract': 'Course Contract',
  '/website-evaluations': 'Website Evaluations',
  '/survey': 'Survey',
  '/gallery': 'Gallery',
  '/cards': 'Cards',
  '/inventory': 'Inventory',
  '/instructions': 'Instructions',
  '/highlight': 'Highlight',
  '/crappy-page': 'Crappy Page',
  '/intro-form': 'Introduction Form',
  '/product': 'Product',
  '/hobby': 'Hobby',
  '/isteigerdesign': 'isteigerDesign',
  '/slideshow': 'Slideshow',
}

function TitleUpdater() {
  const location = useLocation()
  useEffect(() => {
    const suffix = pageTitles[location.pathname]
    if (suffix) {
      document.title = `Ian K. Steiger's Ingenious Squirrel ~ ITIS 3135 | ${suffix}`
    } else {
      document.title = "Ian K. Steiger's Ingenious Squirrel ~ ITIS 3135"
    }
  }, [location])
  return null
}

function App() {
  const location = useLocation()
  const isHobby = location.pathname === '/hobby'
  const isIsteigerDesign = location.pathname === '/isteigerdesign'
  const isStandalone = isHobby || isIsteigerDesign

  return (
    <>
      <TitleUpdater />
      {!isStandalone && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/website-evaluations" element={<WebsiteEvaluations />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/highlight" element={<Highlight />} />
        <Route path="/crappy-page" element={<CrappyPage />} />
        <Route path="/intro-form" element={<IntroForm />} />
        <Route path="/product" element={<Product />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/isteigerdesign" element={<IsteigerDesign />} />
        <Route path="/slideshow" element={<Slideshow />} />
      </Routes>
      {!isStandalone && <Footer />}
    </>
  )
}

export default App
