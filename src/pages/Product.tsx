export default function Product() {
  return (
    <>
      <style>{`
        .product-wrap * { box-sizing: border-box; }
        .product-header { display: flex; align-items: center; justify-content: space-between; background-color: #1a1a2e; padding: 20px 30px; border-radius: 8px; margin-bottom: 20px; }
        .product-header-img { height: 50px; width: auto; border-radius: 4px; }
        .product-nav { display: flex; gap: 20px; }
        .product-nav-link { color: #e0e0e0; text-decoration: none; font-size: 1em; font-weight: 500; padding: 6px 12px; border-radius: 4px; transition: background 0.2s; }
        .product-nav-link:hover { background-color: #e94560; color: #fff; }
        .hero { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: linear-gradient(135deg, #1a1a2e, #16213e); color: #fff; padding: 80px 20px; border-radius: 8px; margin-bottom: 20px; }
        .hero h1 { font-size: 2.5em; margin-bottom: 16px; font-family: Arial, sans-serif; }
        .hero > p { font-size: 1.1em; margin-bottom: 30px; color: #ccc; }
        .hero-form { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
        .hero-email { padding: 12px 16px; border: none; border-radius: 4px; font-size: 1em; width: 280px; }
        .hero-submit { padding: 12px 24px; background-color: #e94560; color: #fff; border: none; border-radius: 4px; font-size: 1em; cursor: pointer; }
        .hero-submit:hover { background-color: #c73652; }
        .features-section { padding: 60px 30px; background: #f9f9f9; text-align: center; border-radius: 8px; margin-bottom: 20px; }
        .features-section h2 { font-size: 2em; margin-bottom: 40px; color: #1a1a2e; font-family: Arial, sans-serif; }
        .features-grid { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
        .feature { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); max-width: 280px; }
        .feature h3 { color: #e94560; margin-bottom: 12px; }
        .feature p { margin: 0; }
        .video-section { padding: 60px 30px; text-align: center; background: #fff; border-radius: 8px; margin-bottom: 20px; }
        .video-section h2 { font-size: 2em; margin-bottom: 30px; color: #1a1a2e; font-family: Arial, sans-serif; }
        .video-section iframe { max-width: 100%; border-radius: 8px; }
        .pricing-section { padding: 60px 30px; background: #f9f9f9; text-align: center; border-radius: 8px; margin-bottom: 20px; }
        .pricing-section h2 { font-size: 2em; margin-bottom: 40px; color: #1a1a2e; font-family: Arial, sans-serif; }
        .pricing-grid { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
        .plan { background: #fff; padding: 40px 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); min-width: 200px; }
        .plan.featured { background: #1a1a2e; color: #fff; transform: scale(1.05); }
        .plan.featured .price { color: #e94560; }
        .plan p { margin: 0; }
        .price { font-size: 2.5em; font-weight: bold; margin: 10px 0; color: #e94560; }
        .product-footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 20px; border-radius: 8px; }
        .product-footer p { margin: 0; }
        @media (max-width: 600px) {
          .product-header { flex-direction: column; gap: 10px; }
          .product-nav { gap: 10px; }
          .hero h1 { font-size: 1.8em; }
          .features-grid, .pricing-grid { flex-direction: column; align-items: center; }
        }
      `}</style>
      <main className="product-wrap">
        <div className="product-header">
          <img className="product-header-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/320px-A_small_cup_of_coffee.JPG" alt="BrewMaster Coffee Logo" />
          <nav className="product-nav">
            <a className="product-nav-link" href="#features">Features</a>
            <a className="product-nav-link" href="#video-section">Video</a>
            <a className="product-nav-link" href="#pricing">Pricing</a>
          </nav>
        </div>

        <section className="hero">
          <h1>The Perfect Cup, Every Time</h1>
          <p>Experience the art of coffee with BrewMaster's precision brewing technology.</p>
          <form className="hero-form" action="https://www.freecodecamp.org/email-submit">
            <input className="hero-email" type="email" name="email" placeholder="Enter your email address" required />
            <input className="hero-submit" type="submit" value="Get Started" />
          </form>
        </section>

        <section id="features" className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Precision Temperature</h3>
              <p>Brew at the exact temperature for your chosen roast — from light to dark.</p>
            </div>
            <div className="feature">
              <h3>Custom Grind Settings</h3>
              <p>Choose from 12 grind levels to match your favorite brewing method.</p>
            </div>
            <div className="feature">
              <h3>Smart Scheduling</h3>
              <p>Wake up to a fresh cup every morning with our built-in timer.</p>
            </div>
          </div>
        </section>

        <section id="video-section" className="video-section">
          <h2>See It In Action</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a3ICNMQW7Ok" title="BrewMaster Coffee Demo" allowFullScreen></iframe>
        </section>

        <section id="pricing" className="pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            <div className="plan">
              <h3>Starter</h3>
              <p className="price">$49</p>
              <p>Basic brewer with 6 settings</p>
            </div>
            <div className="plan featured">
              <h3>Pro</h3>
              <p className="price">$99</p>
              <p>Full precision control + scheduler</p>
            </div>
            <div className="plan">
              <h3>Elite</h3>
              <p className="price">$149</p>
              <p>All features + app connectivity</p>
            </div>
          </div>
        </section>

        <div className="product-footer">
          <p>&copy; 2026 BrewMaster Coffee. All rights reserved.</p>
        </div>
      </main>
    </>
  )
}
