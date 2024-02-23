import './App.css';
import { useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(null);

  function toggleActive(index){
    setIsActive(index);
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
        <ul className="navMenu">
          <li onClick={() => toggleActive(0)}>
            <a href='#profile' className={isActive === 0 ? 'navLinkChange' : 'navLink'}>Profile</a>
          </li>
          <li onClick={() => toggleActive(1)}>
            <a href='#work' className={isActive === 1 ? 'navLinkChange' : 'navLink'}>Work</a>
          </li>
          <li onClick={() => toggleActive(2)}>
            <a href='#projects' className={isActive === 2 ? 'navLinkChange' : 'navLink'}>Projects</a>
          </li>
          <li onClick={() => toggleActive(3)}>
            <a href='#contact' className={isActive === 3 ? 'navLinkChange' : 'navLink'}>Contact</a>
          </li>
        </ul>
        </nav>
      </header>
      <body>
        <div className='profile'>
          
        </div>
      </body>
    </>
  );
}

export default App;
