import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE_SRC = '/me.jpg'

const defaultCourses = [
  { dept: 'MATH', num: '1242', name: 'Calculus II', reason: 'Required course.' },
  { dept: 'ITSC', num: '3160', name: 'Database Design and Implementation', reason: 'Required and interesting class.' },
  { dept: 'ITIS', num: '3135', name: 'Front-End Web Application Development', reason: 'Interesting, something I have been doing for a while.' },
  { dept: 'CTCM', num: '2530', name: 'Critical Thinking', reason: 'Required course.' },
  { dept: 'ITSC', num: '2181', name: 'Introduction to Computer Systems', reason: 'Required and interesting.' },
]

interface Course {
  id: number
  dept: string
  num: string
  name: string
  reason: string
}

interface FormData {
  firstName: string
  middleName: string
  nickname: string
  lastName: string
  ackStatement: string
  ackDate: string
  mascotAdjective: string
  mascotAnimal: string
  divider: string
  imageSrc: string
  imageCaption: string
  personalStatement: string
  personalBackground: string
  professionalBackground: string
  academicBackground: string
  subjectBackground: string
  primaryComputer: string
  backupComputer: string
  courses: Course[]
  quote: string
  quoteAuthor: string
  funnyThing: string
  shareItem: string
  links: { name: string; href: string }[]
}

function buildNameHeading(data: FormData) {
  let name = data.firstName
  if (data.middleName) name += ' ' + data.middleName
  if (data.nickname) name += ' "' + data.nickname + '"'
  name += ' ' + data.lastName
  const divider = data.divider || '|'
  return name + ' ' + divider + ' ' + data.mascotAdjective + ' ' + data.mascotAnimal
}

function getDefaultFormData(): Omit<FormData, 'courses'> {
  return {
    firstName: 'Ian',
    middleName: 'K.',
    nickname: '',
    lastName: 'Steiger',
    ackStatement: 'I acknowledge that the information on this page is accurate to the best of my knowledge.',
    ackDate: '01/21/2026',
    mascotAdjective: 'Ingenious',
    mascotAnimal: 'Squirrel',
    divider: '|',
    imageSrc: DEFAULT_IMAGE_SRC,
    imageCaption: 'Outside of my elementary school with my HS Grad gown on',
    personalStatement: "I'm a freshman (sophomore in credits) at Charlotte majoring in Computer Science. I'm excited to work on front-end systems this semester.",
    personalBackground: "I'm 18 years old and love anything computer related.",
    professionalBackground: 'I work at PayMore Stores as an intern creating internal applications to speed up processes, and also work in a store.',
    academicBackground: "I'm a Sophomore at Charlotte studying computer science with a concentration in Web/Mobile Dev and Software Engineering. Before that I attended HS in Cary, North Carolina.",
    subjectBackground: 'I have been developing a lot of random websites and such in React and other frameworks.',
    primaryComputer: 'Custom Built PC (R9 7950X, RX 7900 XT, 64GB RAM), My Suite Room',
    backupComputer: '2023 16" M3 Pro MacBook Pro, or Surface Pro 10 if necessary, The Library',
    quote: 'Details matter, it\'s worth waiting to get it right.',
    quoteAuthor: 'Steve Jobs',
    funnyThing: 'I am from Switzerland.',
    shareItem: 'I have a fair bit of experience in this, but my knowledge is completely patchwork.',
    links: [
      { name: 'CLT Web', href: 'https://webpages.charlotte.edu/isteiger' },
      { name: 'GitHub.io', href: 'https://isteiger.github.io/' },
      { name: 'GitHub', href: 'https://github.com/isteiger' },
      { name: 'freeCodeCamp', href: 'https://www.freecodecamp.org/isteigerclt' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/iksteiger' },
    ],
  }
}

let courseIdCounter = 0

function makeDefaultCourses(): Course[] {
  return defaultCourses.map(c => ({ ...c, id: ++courseIdCounter }))
}

export default function IntroForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const [fields, setFields] = useState(getDefaultFormData())
  const [courses, setCourses] = useState<Course[]>(makeDefaultCourses())
  const fileInputRef = useRef<HTMLInputElement>(null)

  function setField(key: keyof typeof fields, value: string) {
    setFields(prev => ({ ...prev, [key]: value }))
  }

  function setLinkField(index: number, key: 'name' | 'href', value: string) {
    setFields(prev => {
      const newLinks = [...prev.links]
      newLinks[index] = { ...newLinks[index], [key]: value }
      return { ...prev, links: newLinks }
    })
  }

  function addCourse() {
    setCourses(prev => [...prev, { id: ++courseIdCounter, dept: '', num: '', name: '', reason: '' }])
  }

  function removeCourse(id: number) {
    setCourses(prev => prev.filter(c => c.id !== id))
  }

  function updateCourse(id: number, key: keyof Omit<Course, 'id'>, value: string) {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, [key]: value } : c))
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setField('imageSrc', ev.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  function handleReset() {
    setFields(getDefaultFormData())
    setCourses(makeDefaultCourses())
    if (fileInputRef.current) fileInputRef.current.value = ''
    setSubmitted(false)
  }

  function handleClear() {
    setFields({
      firstName: '', middleName: '', nickname: '', lastName: '',
      ackStatement: '', ackDate: '', mascotAdjective: '', mascotAnimal: '', divider: '',
      imageSrc: '', imageCaption: '', personalStatement: '',
      personalBackground: '', professionalBackground: '', academicBackground: '', subjectBackground: '',
      primaryComputer: '', backupComputer: '',
      quote: '', quoteAuthor: '', funnyThing: '', shareItem: '',
      links: [
        { name: '', href: '' }, { name: '', href: '' }, { name: '', href: '' },
        { name: '', href: '' }, { name: '', href: '' },
      ],
    })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function validate(data: FormData): boolean {
    const requiredFields: [keyof FormData, string][] = [
      ['firstName', 'First Name'], ['lastName', 'Last Name'],
      ['ackStatement', 'Acknowledgment Statement'], ['ackDate', 'Acknowledgment Date'],
      ['mascotAdjective', 'Mascot Adjective'], ['mascotAnimal', 'Mascot Animal'],
      ['divider', 'Divider'], ['imageCaption', 'Picture Caption'],
      ['personalStatement', 'Personal Statement'], ['personalBackground', 'Personal Background'],
      ['professionalBackground', 'Professional Background'], ['academicBackground', 'Academic Background'],
      ['subjectBackground', 'Background in this Subject'], ['primaryComputer', 'Primary Work Computer'],
      ['backupComputer', 'Backup Work Computer'], ['quote', 'Quote'], ['quoteAuthor', 'Quote Author'],
    ]
    for (const [key, label] of requiredFields) {
      if (!data[key]) { alert('Please fill in the required field: ' + label); return false }
    }
    for (let j = 0; j < 5; j++) {
      const l = data.links[j]
      if (!l.name || !l.href) { alert('Please fill in both name and URL for Link ' + (j + 1)); return false }
    }
    if (data.courses.length === 0) { alert('Please add at least one course.'); return false }
    for (let k = 0; k < data.courses.length; k++) {
      const c = data.courses[k]
      if (!c.dept || !c.num || !c.name || !c.reason) {
        alert('Please fill in all fields for Course ' + (k + 1)); return false
      }
    }
    return true
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const data: FormData = { ...fields, courses }
    if (!validate(data)) return
    setSubmittedData(data)
    setSubmitted(true)
  }

  if (submitted && submittedData) {
    const d = submittedData
    const filteredLinks = d.links.filter(l => l.name && l.href)
    return (
      <main>
        <h2>Introduction Form</h2>
        <h1>{buildNameHeading(d)}</h1>
        {d.imageSrc && (
          <figure>
            <img src={d.imageSrc} alt={d.firstName + ' ' + d.lastName} style={{ maxWidth: '300px' }} />
            <figcaption>{d.imageCaption}</figcaption>
          </figure>
        )}
        <p>{d.personalStatement}</p>
        <ul>
          <li><b>Personal Background:</b> {d.personalBackground}</li>
          <li><b>Professional Background:</b> {d.professionalBackground}</li>
          <li><b>Academic Background:</b> {d.academicBackground}</li>
          <li><b>Background in this Subject:</b> {d.subjectBackground}</li>
          <li><b>Primary Work Computer:</b> {d.primaryComputer}</li>
          <li><b>Backup Work Computer &amp; Location Plan:</b> {d.backupComputer}</li>
          <li>
            <b>Courses I'm Taking &amp; Why:</b>
            <ol>
              {d.courses.map((c, i) => (
                <li key={i}><b>{c.dept}{c.num} - {c.name}:</b> {c.reason}</li>
              ))}
            </ol>
          </li>
          {d.funnyThing && <li><b>Funny/Interesting item to remember me by:</b> {d.funnyThing}</li>}
          {d.shareItem && <li><b>I'd also like to share:</b> {d.shareItem}</li>}
        </ul>
        <blockquote>
          &ldquo;{d.quote}&rdquo;<br />
          <cite>- {d.quoteAuthor}</cite>
        </blockquote>
        <p>
          {filteredLinks.map((l, i) => (
            <span key={i}>{i > 0 && ' | '}<a href={l.href}>{l.name}</a></span>
          ))}
        </p>
        <p>Page designed by <Link to="/isteigerdesign">isteigerDesign</Link></p>
        <hr />
        <p><button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#93c5fd', cursor: 'pointer', fontSize: '1rem', padding: 0 }}>&#8635; Start Over</button></p>
      </main>
    )
  }

  return (
    <>
      <style>{`
        #intro-form fieldset { border: 1px solid #d1d5db; border-radius: 4px; margin-bottom: 1rem; padding: 0.75rem 1rem; }
        #intro-form legend { font-weight: 600; padding: 0 0.25rem; }
        #intro-form label { display: block; margin-bottom: 0.5rem; font-size: 0.95rem; }
        #intro-form input[type="text"],
        #intro-form input[type="date"],
        #intro-form input[type="url"],
        #intro-form input[type="file"],
        #intro-form textarea {
          display: block; width: 100%; box-sizing: border-box; margin-top: 0.2rem;
          padding: 0.4rem 0.5rem; border: 1px solid #9ca3af; border-radius: 3px;
          font-family: inherit; font-size: 0.95rem; background: #f9fafb; color: #1f2937;
        }
        #intro-form textarea { resize: vertical; min-height: 4rem; }
        .form-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
        .form-buttons button { padding: 0.45rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-size: 0.95rem; font-family: inherit; }
        .btn-submit { background: #1d4ed8; color: #fff; }
        .btn-submit:hover { background: #1e40af; }
        .btn-reset { background: #6b7280; color: #fff; }
        .btn-reset:hover { background: #4b5563; }
        .btn-clear { background: #e5e7eb; color: #1f2937; }
        .btn-clear:hover { background: #d1d5db; }
        .delete-course-btn { background: #dc2626; color: #fff; padding: 0.15rem 0.5rem; font-size: 0.8rem; margin-left: 0.5rem; vertical-align: middle; border: none; border-radius: 4px; cursor: pointer; }
        .delete-course-btn:hover { background: #b91c1c; }
        #image-preview { display: block; max-width: 200px; margin-top: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; }
        .course-entry fieldset { background: #f9fafb; }
        #intro-form blockquote { border-left: 3px solid #d1d5db; margin-left: 0; padding-left: 1rem; color: #4b5563; font-style: italic; }
        #intro-form .add-course-btn { padding: 0.45rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-size: 0.95rem; background: #e5e7eb; color: #1f2937; }
        #intro-form .add-course-btn:hover { background: #d1d5db; }
      `}</style>
      <main>
        <h2>Introduction Form</h2>
        <h3>Please submit the form below.</h3>

        <form id="intro-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <fieldset>
            <legend>Name</legend>
            <label>First Name*
              <input type="text" value={fields.firstName} onChange={e => setField('firstName', e.target.value)} placeholder="First name" required />
            </label>
            <label>Middle Name or Initial (optional)
              <input type="text" value={fields.middleName} onChange={e => setField('middleName', e.target.value)} placeholder="Middle name or initial" />
            </label>
            <label>Nickname / Preferred Name (optional)
              <input type="text" value={fields.nickname} onChange={e => setField('nickname', e.target.value)} placeholder="e.g. Alex" />
            </label>
            <label>Last Name*
              <input type="text" value={fields.lastName} onChange={e => setField('lastName', e.target.value)} placeholder="Last name" required />
            </label>
          </fieldset>

          {/* Acknowledgment */}
          <fieldset>
            <legend>Acknowledgment</legend>
            <label>Acknowledgment Statement*
              <textarea value={fields.ackStatement} onChange={e => setField('ackStatement', e.target.value)} placeholder="I acknowledge that..." required />
            </label>
            <label>Acknowledgment Date*
              <input type="text" value={fields.ackDate} onChange={e => setField('ackDate', e.target.value)} placeholder="MM/DD/YYYY" required />
            </label>
          </fieldset>

          {/* Mascot */}
          <fieldset>
            <legend>Mascot</legend>
            <label>Mascot Adjective*
              <input type="text" value={fields.mascotAdjective} onChange={e => setField('mascotAdjective', e.target.value)} placeholder="e.g. Clever" required />
            </label>
            <label>Mascot Animal*
              <input type="text" value={fields.mascotAnimal} onChange={e => setField('mascotAnimal', e.target.value)} placeholder="e.g. Penguin" required />
            </label>
            <label>Divider*
              <input type="text" value={fields.divider} onChange={e => setField('divider', e.target.value)} placeholder="e.g. ~ | ♥" required />
            </label>
          </fieldset>

          {/* Picture */}
          <fieldset>
            <legend>Picture</legend>
            <label>Upload Image (optional — defaults to your photo)
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} />
            </label>
            {fields.imageSrc && <img id="image-preview" src={fields.imageSrc} alt="Preview" />}
            <label>Picture Caption*
              <input type="text" value={fields.imageCaption} onChange={e => setField('imageCaption', e.target.value)} placeholder="Describe your photo" required />
            </label>
          </fieldset>

          {/* Personal Statement */}
          <fieldset>
            <legend>Personal Statement</legend>
            <label>Personal Statement*
              <textarea value={fields.personalStatement} onChange={e => setField('personalStatement', e.target.value)} placeholder="Write a brief intro about yourself..." required />
            </label>
          </fieldset>

          {/* Background */}
          <fieldset>
            <legend>Background</legend>
            <label>Personal Background*
              <textarea value={fields.personalBackground} onChange={e => setField('personalBackground', e.target.value)} placeholder="Your personal background..." required />
            </label>
            <label>Professional Background*
              <textarea value={fields.professionalBackground} onChange={e => setField('professionalBackground', e.target.value)} placeholder="Your professional background..." required />
            </label>
            <label>Academic Background*
              <textarea value={fields.academicBackground} onChange={e => setField('academicBackground', e.target.value)} placeholder="Your academic background..." required />
            </label>
            <label>Background in this Subject*
              <textarea value={fields.subjectBackground} onChange={e => setField('subjectBackground', e.target.value)} placeholder="Your background in web/this subject..." required />
            </label>
            <label>Primary Work Computer*
              <input type="text" value={fields.primaryComputer} onChange={e => setField('primaryComputer', e.target.value)} placeholder="Your primary computer" required />
            </label>
            <label>Backup Work Computer &amp; Location Plan*
              <input type="text" value={fields.backupComputer} onChange={e => setField('backupComputer', e.target.value)} placeholder="Backup computer and where you'll use it" required />
            </label>
          </fieldset>

          {/* Courses */}
          <fieldset>
            <legend>Courses I'm Taking &amp; Why</legend>
            <div id="courses-container">
              {courses.map((course, index) => (
                <div key={course.id} className="course-entry">
                  <fieldset>
                    <legend>
                      Course {index + 1}{' '}
                      <button type="button" className="delete-course-btn" onClick={() => removeCourse(course.id)}>Remove</button>
                    </legend>
                    <label>Department: <input type="text" value={course.dept} onChange={e => updateCourse(course.id, 'dept', e.target.value)} placeholder="e.g. ITIS" required /></label>
                    <label>Number: <input type="text" value={course.num} onChange={e => updateCourse(course.id, 'num', e.target.value)} placeholder="e.g. 3135" required /></label>
                    <label>Name: <input type="text" value={course.name} onChange={e => updateCourse(course.id, 'name', e.target.value)} placeholder="Course name" required /></label>
                    <label>Reason: <input type="text" value={course.reason} onChange={e => updateCourse(course.id, 'reason', e.target.value)} placeholder="Why are you taking it?" required /></label>
                  </fieldset>
                </div>
              ))}
            </div>
            <button type="button" className="add-course-btn" onClick={addCourse}>+ Add Course</button>
          </fieldset>

          {/* Quote */}
          <fieldset>
            <legend>Quote</legend>
            <label>Quote*
              <textarea value={fields.quote} onChange={e => setField('quote', e.target.value)} placeholder="Your favorite quote..." required />
            </label>
            <label>Quote Author*
              <input type="text" value={fields.quoteAuthor} onChange={e => setField('quoteAuthor', e.target.value)} placeholder="Who said it?" required />
            </label>
          </fieldset>

          {/* Optional Items */}
          <fieldset>
            <legend>Optional Items</legend>
            <label>Funny / Interesting thing to remember you by (optional)
              <input type="text" value={fields.funnyThing} onChange={e => setField('funnyThing', e.target.value)} placeholder="Something funny or interesting about you" />
            </label>
            <label>Something I'd like to share (optional)
              <textarea value={fields.shareItem} onChange={e => setField('shareItem', e.target.value)} placeholder="Anything else you'd like visitors to know..." />
            </label>
          </fieldset>

          {/* Links */}
          <fieldset>
            <legend>Links (5 required)</legend>
            {fields.links.map((link, i) => (
              <div key={i}>
                <label>Link {i + 1} Name*
                  <input type="text" value={link.name} onChange={e => setLinkField(i, 'name', e.target.value)} placeholder="Link label" required />
                </label>
                <label>Link {i + 1} URL*
                  <input type="url" value={link.href} onChange={e => setLinkField(i, 'href', e.target.value)} placeholder="https://..." required />
                </label>
              </div>
            ))}
          </fieldset>

          {/* Buttons */}
          <div className="form-buttons">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-reset" onClick={handleReset}>Reset</button>
            <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </main>
    </>
  )
}
