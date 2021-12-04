import React from 'react'
import './Footer.css'

const footerData = [
    {
        title: 'About',
        links: [
            {
                title: 'About',
                link: '/about'
            },
            {
                title: 'Team',
                link: '/team'
            },
            {
                title: 'Careers',
                link: '/careers'
            },
            {
                title: 'Contact',
                link: '/contact'
            }
        ],
    },
    {
        title: 'Services',
        links: [
            {
                title: 'Web Development',
                link: '/web-development'
            },
            {
                title: 'Mobile Development',
                link: '/mobile-development'
            },
            {
                title: 'Digital Marketing',
                link: '/digital-marketing'
            },
            {
                title: 'SEO',
                link: '/seo'
            }
        ]
    },
    {
        title: 'Social',
        links: [
            {
                title: 'Facebook',
                link: 'https://www.facebook.com/'
            },
            {
                title: 'Twitter',
                link: 'https://www.twitter.com/'
            },
            {
                title: 'Instagram',
                link: 'https://www.instagram.com/'
            },
            {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/'
            }
        ]
    }
]

 const Footer = () => {

    return (
      <footer>
        <div className="footer-container">
          <div className="content">
            <div className="footer-content-item">
             
                <ul>
                    <li><i className='fab fa-twitter'></i></li>
                    <li><i className='fab fa-facebook-square'></i></li>
                    <li><i className='fab fa-instagram'></i></li>
                    <li><i className='fab fa-linkedin'></i></li>
                </ul>
                  copyright &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
/*
              {/* <ul>
                {footerData[0].links.map((link, index) => {
                    return (
                        <li key={index}>
                        <a href={link.link}>{link.title}</a>
                        </li>
                    )
                }
                )}
              </ul>
            </div>
            <div className="footer-content-item">
              <h3>About</h3>
              <ul>
                {footerData[1].links.map((link, index) => {
                    return (
                        <li key={index}>
                        <a href={link.link}>{link.title}</a>
                        </li>
                    )
                }
                )}
              </ul>
            </div>
            <div className="footer-content-item">
              <h3>Social</h3>
              <ul>
                {footerData[2].links.map((link, index) => {
                    return (
                        <li key={index}>
                        <a href={link.link}>{link.title}</a>
                        </li>
                    )
                }
                )}
              </ul> }
*/