import Link from 'next/link';
import { FaFileDownload } from 'react-icons/fa';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navLinks = [
    { id: 1, name: 'Projects' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Contact' },
  ];

  const cx = (...styles) => styles.join(' ');

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <nav className={styles.nav}>
      {/* Brand */}
      <div className={styles.brand}>
        <a href="/">
          <h2>B</h2>
        </a>
      </div>
      {/* nav links */}
      <div
        className={menu ? cx(styles.modal, styles.open) : styles.modal}
        onClick={handleClick}
      ></div>

      <ul
        className={
          menu ? cx(styles.nav__links, styles.open) : styles.nav__links
        }
      >
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.id}>
              <a href={`#${navLink.name}`} onClick={handleClick}>
                <span>
                  {navLink.id < 10 ? '0' + navLink.id + '.' : navLink.id + '.'}
                </span>
                <p>{navLink.name}</p>
              </a>
            </li>
          );
        })}
        <li>
          <button>
            <a
              className={styles.cv__link}
              href="bryan-bandela-cv.pdf"
              target="_blank"
            >
              <span>cv</span>{' '}
              <i>
                <FaFileDownload />
              </i>
            </a>
          </button>
        </li>
      </ul>

      {/*Burger menu */}
      <div
        className={!menu ? styles.menuBtn : cx(styles.menuBtn, styles.open)}
        onClick={handleClick}
      >
        <div className={styles.menuBtn__burger}></div>
      </div>
    </nav>
  );
}

export default Navbar;
