import React from 'react';
import './nav.css';


const links = [
    { href: 'https://github.com/Napat07', label: 'GitHub' },
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })
  
  const Nav = () => (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
        <Link href="/twopage">
          <a>Contact</a>
        </Link>
        </li>
      </ul>
  

      </nav>
)

export default Nav