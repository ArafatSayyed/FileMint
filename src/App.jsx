import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  const tools = [
    { name: 'Merge PDF', icon: '📑', description: 'Combine multiple PDFs into one' },
    { name: 'Split PDF', icon: '✂️', description: 'Separate pages from a PDF' },
    { name: 'Compress PDF', icon: '🗜️', description: 'Reduce PDF file size' },
    { name: 'PDF to JPG', icon: '🖼️', description: 'Convert PDF pages to images' },
    { name: 'Images to PDF', icon: '📄', description: 'Turn images into a PDF' },
    { name: 'Rotate PDF', icon: '🔄', description: 'Rotate PDF pages' },
    { name: 'Sign PDF', icon: '✍️', description: 'Add your signature to a PDF' },
    { name: 'Scan Documents', icon: '📷', description: 'Scan documents with your camera' },
  ]

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#" aria-label="FileMint home">
          <span className="brand-icon">F</span>
          FileMint
        </a>

        <nav>
          <a href="#tools">All Tools</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero-section">
        <span className="eyebrow">YOUR DOCUMENTS, SIMPLIFIED</span>
        <h1>Every document task.<br /><span>One simple place.</span></h1>
        <p>Free and easy-to-use tools for your PDFs and documents.</p>

        <label className="search-box">
          <span aria-hidden="true">🔎</span>
          <input
            type="search"
            placeholder="Search PDF tools..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search PDF tools"
          />
        </label>

        <p className="privacy-note">🔒 Your privacy matters. More tools coming soon.</p>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-heading">
          <div>
            <span className="eyebrow">GET THINGS DONE</span>
            <h2>Popular tools</h2>
          </div>
          <span>{filteredTools.length} tools</span>
        </div>

        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className="tool-icon" aria-hidden="true">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <span className="tool-link">Explore tool →</span>
            </article>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="empty-state">No tools found. Try another search.</p>
        )}
      </section>

      <footer id="about">
        <a className="brand" href="#">
          <span className="brand-icon">F</span>
          FileMint
        </a>
        <p>Simple document tools, designed with privacy in mind.</p>
        <small>© {new Date().getFullYear()} FileMint</small>
      </footer>
    </main>
  )
}

export default App
