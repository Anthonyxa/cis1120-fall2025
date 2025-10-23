import { HashLink } from 'react-router-hash-link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><HashLink to="/">Home</HashLink></li>
        <li><HashLink to="/about">About Organization</HashLink></li>
        <li><HashLink to="/contact">Contact Us</HashLink></li>
        <li><HashLink to="/resume">Resume</HashLink></li>
      </ul>
    </nav>
  );
}
