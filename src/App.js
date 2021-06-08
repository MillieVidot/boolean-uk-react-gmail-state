import { useState } from 'react'

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)

  function updateReadEmail(email) {
    return emails.map(oneEmail => {
      if (oneEmail.id === email.id) {
        return { ...oneEmail, read: !oneEmail.read }
      } else {
        return oneEmail
      }
    })
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">1</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => (
            <li>
              <input
                id="read"
                type="checkbox"
                checked={email.read}
                onChange={() => {
                  setEmails(updateReadEmail(email))
                }}
              />
              <button>Star</button>
              {email.sender}
              {email.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
