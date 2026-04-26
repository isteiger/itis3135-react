import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Ian K. Steiger's Ingenious Squirrel ~ ITIS 3135</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/contract">Contract</Link> |{' '}
        <Link to="/website-evaluations">Website Evaluations</Link> |{' '}
        <Link to="/survey">Survey</Link> |{' '}
        <Link to="/gallery">Gallery</Link> |{' '}
        <Link to="/cards">Cards</Link> |{' '}
        <Link to="/inventory">Inventory</Link> |{' '}
        <Link to="/instructions">Instructions</Link> |{' '}
        <Link to="/highlight">Highlight</Link> |{' '}
        <Link to="/intro-form">Intro Form</Link> |{' '}
        <Link to="/product">Product</Link> |{' '}
        <Link to="/slideshow">Slideshow</Link>
      </nav>
      <nav style={{ marginTop: '0.25rem', fontSize: '0.9em' }}>
        <Link to="/crappy-page">Crappy Page</Link> |{' '}
        <Link to="/hobby">Hobby</Link>
      </nav>
    </header>
  )
}
