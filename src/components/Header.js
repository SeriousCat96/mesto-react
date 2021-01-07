import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className = "header page__section page__section_indent-size_s">
        <img src = {logo} className = "header__logo" alt = "logo"/>
      </header>
    )
  }
}

export default React.memo(Header);