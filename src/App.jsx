import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  const tools = [
    {
      name: 'Merge PDF',
      icon: '📑',
      description: 'Combine multiple PDF files into one document.',
      category: 'Organize PDF',
    },
    {
      name: 'Compress PDF',
      icon: '📉',
      description: 'Reduce PDF file size for easier sharing.',
      category: 'Optimize PDF',
    },
    {
      name: 'Split PDF',
      icon: '✂️',
      description: 'Separate a PDF into multiple smaller files.',
      category: 'Organize PDF',
    },
    {
      name: 'Remove PDF Pages',
      icon: '🗑️',
      description: 'Remove unwanted pages from your PDF.',
      category: 'Organize PDF',
    },
    {
      name: 'PDF to JPG',
      icon: '🖼️',
      description: 'Convert PDF pages into JPG images.',
      category: 'Convert PDF',
    },
    {
      name: 'Images to PDF',
      icon: '📄',
      description: 'Turn your images into a single PDF document.',
      category: 'Convert PDF',
    },
    {
      name: 'Rotate PDF',
      icon: '🔄',
      description: 'Rotate PDF pages into the correct direction.',
      category: 'Organize PDF',
    },
    {
      name: 'Sign PDF',
      icon: '✍️',
      description: 'Add your signature to a PDF document.',
      category: 'Edit PDF',
    },
    {
      name: 'Scan Documents',
      icon: '📷',
      description: 'Scan paper documents using your camera.',
      category: 'Scan Documents',
    },
    {
      name: 'PDF to Word',
      icon: '📝',
      description: 'Convert PDF documents into editable Word files.',
      category: 'Convert PDF',
    },
    {
      name: 'Protect PDF',
      icon: '🔒',
      description: 'Protect your PDF documents with a password.',
      category: 'PDF Security',
    },
    {
      name: 'Unlock PDF',
      icon: '🔓',
      description: 'Remove password protection when authorized.',
      category: 'PDF Security',
    },
  ]

  const categories = [
    'All Tools',
    'Organize PDF',
    'Optimize PDF',
    'Convert PDF',
    'Edit PDF',
    'PDF Security',
    'Scan Documents',
  ]

  const filteredTools = tools.filter((tool) => {
    const searchText = search.trim().toLowerCase()

    return (
      tool.name.toLowerCase().includes(searchText) ||
      tool.description.toLowerCase().includes(searchText) ||
      tool.category.toLowerCase().includes(searchText)
    )
  })

  function handleCategoryClick(category) {
    setSearch(category === 'All Tools' ? '' : category)

    document.getElementById('tools')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  function handleSearchSubmit(event) {
    event.preventDefault()

    document.getElementById('tools')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main>
      {/* Header */}

      <header className="navbar">
        <a className="brand" href="#" aria-label="FileMint home">
          <img
            className="brand-logo"
            src="/FileMint-logo.svg"
            alt="FileMint"
          />
        </a>

        <nav aria-label="Main navigation">
          <a
            href="#tools"
            onClick={() => setSearch('')}
          >
            All Tools
          </a>

          <a
            href="#tools"
            onClick={() => setSearch('Merge PDF')}
          >
            Merge PDF
          </a>

          <a
            href="#tools"
            onClick={() => setSearch('Compress PDF')}
          >
            Compress PDF
          </a>

          <a
            href="#tools"
            onClick={() => setSearch('Convert PDF')}
          >
            Convert PDF
          </a>
        </nav>
      </header>

      {/* Hero Section */}

      <section className="hero-section">
        <span className="eyebrow">
          YOUR DOCUMENTS, SIMPLIFIED
        </span>

        <h1>
          All your PDF tools.
          <br />
          <span>One smarter workspace.</span>
        </h1>

        <p className="hero-description">
          Merge, compress, convert and organize your PDFs with ease.
          Discover simple tools designed to make document work faster.
        </p>

        {/* Search Bar */}

        <form
          className="search-box"
          onSubmit={handleSearchSubmit}
        >
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            placeholder="What would you like to do with your PDF?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search document tools"
          />

          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <p className="privacy-note">
          Simple tools for your everyday document tasks.
        </p>
      </section>

      {/* PDF Tools Section */}

      <section className="tools-section" id="tools">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FIND YOUR TOOL</span>

            <h2>Popular PDF tools</h2>

            <p>
              Choose a tool to get started with your document.
            </p>
          </div>

          <span className="tool-count" aria-live="polite">
            {filteredTools.length}{' '}
            {filteredTools.length === 1 ? 'tool' : 'tools'}
          </span>
        </div>

        {/* Category Filters */}

        <div
          className="category-filters"
          aria-label="Filter tools by category"
        >
          {categories.map((category) => (
            <button
              className={`category-button ${
                (category === 'All Tools' && search === '') ||
                search === category
                  ? 'active'
                  : ''
              }`}
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tool Cards */}

        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className="tool-icon" aria-hidden="true">
                {tool.icon}
              </div>

              <span className="tool-category">
                {tool.category}
              </span>

              <h3>{tool.name}</h3>

              <p>{tool.description}</p>

              <a
                className="tool-link"
                href="#tools"
                onClick={(event) => {
                  event.preventDefault()
                  setSearch(tool.name)
                }}
                aria-label={`Find ${tool.name}`}
              >
                Explore tool <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Empty Search Results */}

        {filteredTools.length === 0 && (
          <div className="empty-state">
            <p>No matching tools found.</p>

            <button
              type="button"
              className="search-button"
              onClick={() => setSearch('')}
            >
              Show all tools
            </button>
          </div>
        )}
      </section>

      {/* Footer */}

      <footer id="about">
        <a className="brand" href="#" aria-label="FileMint home">
          <img
            className="brand-logo"
            src="/FileMint-logo.svg"
            alt="FileMint"
          />
        </a>

        <p>
          Making document tasks simpler, one tool at a time.
        </p>

        <small>
          © {new Date().getFullYear()} FileMint. All rights reserved.
        </small>
      </footer>
    </main>
  )
}

export default App
