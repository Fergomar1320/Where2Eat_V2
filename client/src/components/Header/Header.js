import { useState } from 'react';

import './Header.css'

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <h1 className="title">Where2Eat</h1>
      <div className="user-logo" onClick={() => setShowMenu(!showMenu)}>
      <img src="/images/user-logo.png" alt="User logo" width={40} height={40} />
      </div>
      {showMenu && (
        <div className="user-menu">
          <button className="menu-item">Mis reservaciones</button>
          <button className="menu-item">Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
