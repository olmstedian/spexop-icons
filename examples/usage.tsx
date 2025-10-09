/**
 * Example usage of @spexop/icons
 * 
 * This file demonstrates various ways to use the icons package
 * Note: These examples show how to use the published package.
 * In the actual package, you would import from '@spexop/icons'
 */

import React from 'react';
import {
  ArrowRight,
  Check,
  Close,
  Home,
  Menu,
  Search,
  Settings,
  User,
} from '../src/index';

// Basic usage
export function BasicExample() {
  return (
    <div>
      <Home />
      <User />
      <Settings />
    </div>
  );
}

// Custom size and color
export function CustomizedExample() {
  return (
    <div>
      <Home size={16} color="#000" />
      <User size={24} color="#3b82f6" />
      <Settings size={32} color="#ef4444" />
    </div>
  );
}

// With accessibility
export function AccessibleExample() {
  return (
    <button type="button">
      <Search title="Search the site" />
      <span className="sr-only">Search</span>
    </button>
  );
}

// Navigation example
export function NavigationExample() {
  return (
    <nav>
      <a href="/">
        <Home size={20} />
        <span>Home</span>
      </a>
      <a href="/profile">
        <User size={20} />
        <span>Profile</span>
      </a>
      <a href="/settings">
        <Settings size={20} />
        <span>Settings</span>
      </a>
    </nav>
  );
}

// Button states
export function ButtonExample() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <Close /> : <Menu />}
    </button>
  );
}

// Form feedback
export function FormExample() {
  const [isValid, setIsValid] = React.useState(false);

  return (
    <div className="input-group">
      <input
        type="email"
        onChange={(e) => setIsValid(e.target.validity.valid)}
      />
      {isValid && <Check color="#10b981" size={20} />}
    </div>
  );
}

// Interactive list
export function ListExample() {
  const items = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <ArrowRight size={16} />
        </li>
      ))}
    </ul>
  );
}

// Styled with CSS
export function StyledExample() {
  return (
    <div className="icon-container">
      <Home className="icon icon-primary" />
      <User className="icon icon-secondary" />
      <Settings className="icon icon-accent" />
    </div>
  );
}

// With custom props
export function CustomPropsExample() {
  return (
    <div>
      <Home
        size={24}
        color="currentColor"
        strokeWidth={1.5}
        className="custom-icon"
        style={{ marginRight: '8px' }}
      />
    </div>
  );
}

// Animation example
export function AnimatedExample() {
  return (
    <div>
      <Settings
        className="animate-spin"
        size={24}
      />
    </div>
  );
}

// Responsive sizes
export function ResponsiveExample() {
  return (
    <div>
      <Home className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
    </div>
  );
}

