import { useState } from 'react'

import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const [hideReadEmails, setHideReadEmails] = useState(true)
  const [currentTab, setCurrentTab] = useState(true)

  function getStarredEmails(emails) {
    return emails.filter(email => !email.starred) <<<<<<<<<<HERE
  }

  function toggleHideEmails() {
    setHideReadEmails(!hideReadEmails)
  }

  const unreadCount = emails.filter(email => !email.read).length
  const starredCount = emails.filter(email => email.starred).length

  const emailsToRender = hideReadEmails
    ? emails.filter(email => !email.read)
    : emails

  function updateReadEmail(email) {
    return emails.map(oneEmail => {
      if (oneEmail.id === email.id) {
        return { ...oneEmail, read: !oneEmail.read }
      } else {
        return oneEmail
      }
    })
  }

  function updateStarredEmail(email) {
    return emails.map(oneEmail => {
      if (oneEmail.id === email.id) {
        return { ...oneEmail, starred: !oneEmail.starred }
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
            <span className="count">{unreadCount}</span>
          </li>
          <li
            className="item"
            onClick={() => {
              getStarredEmails(emails)
              console.log('67 emails', emails)
            }}
          >
            <span className="label">Starred</span>
            <span className="count">{starredCount}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              // checked={hide}
              onChange={() => {
                toggleHideEmails()
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emailsToRender.map(email => (
            <li
              key={email.id}
              className={email.read ? 'email read' : 'email unread'}
            >
              <input
                id="read"
                type="checkbox"
                checked={email.read}
                onChange={() => {
                  setEmails(updateReadEmail(email))
                }}
              />
              <input
                className="star-checkbox"
                id="star"
                type="checkbox"
                checked={email.starred}
                onChange={() => {
                  setEmails(updateStarredEmail(email))
                }}
              />
              <span className="sender">{email.sender}</span>
              <span className="title">{email.title}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
