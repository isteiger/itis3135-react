export default function Survey() {
  return (
    <main>
      <h1 id="title">Quick Feedback Survey</h1>
      <p id="description">Help us improve by answering a few short questions below.</p>

      <form id="survey-form">
        <label id="name-label" htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Enter your full name" required />

        <label id="email-label" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Enter a valid email address" required />

        <label id="number-label" htmlFor="number">Age</label>
        <input id="number" type="number" name="age" min={13} max={120} placeholder="Enter your age (13-120)" />

        <label htmlFor="dropdown">How did you hear about us?</label>
        <select id="dropdown" name="referral">
          <option value="">Select one</option>
          <option value="friend">Friend / Family</option>
          <option value="social">Social Media</option>
          <option value="search">Search Engine</option>
        </select>

        <p>How satisfied are you?</p>
        <label>
          <input type="radio" name="satisfaction" value="happy" />
          {' '}Satisfied
        </label>
        <label>
          <input type="radio" name="satisfaction" value="neutral" />
          {' '}Neutral
        </label>
        <label>
          <input type="radio" name="satisfaction" value="sad" />
          {' '}Not satisfied
        </label>

        <p>What features do you use? (Select all that apply)</p>
        <label>
          <input type="checkbox" name="features" value="notifications" />
          {' '}Notifications
        </label>
        <label>
          <input type="checkbox" name="features" value="search" />
          {' '}Search
        </label>
        <label>
          <input type="checkbox" name="features" value="favorites" />
          {' '}Favorites
        </label>

        <label htmlFor="comments">Additional comments</label>
        <textarea id="comments" name="comments" rows={5} placeholder="Anything else you want to tell us?" />

        <button id="submit" type="submit">Submit</button>
      </form>
    </main>
  )
}
