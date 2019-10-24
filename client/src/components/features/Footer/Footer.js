import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './Footer.scss';

class Footer extends React.Component {
  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/FAQ', title: 'FAQ' },
      { path: '/rules', title: 'Statute' },
      { path: '/contact', title: 'Contact' }
    ]
  };
  render() {
    const { links } = this.state;
    return (
      <nav className={'footer'}>
        <span className='footer__caption'>
          Made with passion by{' '}
          <a
            href='https://github.com/PawelZurawka?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            Paweł Żurawka
          </a>
        </span>
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default Footer;
