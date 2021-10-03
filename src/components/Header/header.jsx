import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';
import Search from './Search/search';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: var(--thm-white);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  z-index: 100;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 576px) {
    background: white;
  }

  @media (min-width: 768px) {
    background: pink;
  }

  @media (min-width: 992px) {
    background: red;
  }

  @media (min-width: 1200px) {
    background: orange;
  }

  @media (min-width: 1400px) {
    background: blue;
  }
`;
export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <div className="nav_warp">
          <nav>
            <div className="logo">
              <a href="index.html">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  className="image-fit"
                />
              </a>
            </div>
            <ul className="main-menu">
              <li className="menu-item menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="index.html">Home v1</a>
                  </li>
                  <li className="menu-item">
                    <a href="index-2.html">Home v2</a>
                  </li>
                  <li className="menu-item">
                    <a href="index-3.html">Home v3</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="about-2.html">About Me</a>
                  </li>
                  <li className="menu-item">
                    <a href="events.html">Events</a>
                  </li>
                  <li className="menu-item">
                    <a href="videos.html">Videos</a>
                  </li>
                  <li className="menu-item">
                    <a href="services.html">Services</a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Team</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="team.html">Team</a>
                      </li>
                      <li className="menu-item">
                        <a href="team-details.html">Team Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li className="menu-item">
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li className="menu-item">
                    <a href="faqs.html">FAQ's</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Courses</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="courses.html">Courses</a>
                  </li>
                  <li className="menu-item">
                    <a href="course-details.html">Course Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-masonry.html">Blog Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Portfolio</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="portfolio-grid.html">Portfolio Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-gallery.html">Portfolio Gallery</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-masonry.html">Portfolio Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="contact.html">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className="head_actions">
          <Search
        width={175}
        background="white"
        color="black"
        callback={() => {}}
        placeholder="Find Names"
      />

      {/* { names.map( name => <p key={name}>{name}</p>) } */}

      <Search
        width={350}
        background="white"
        color="blue"
        placeColor="blue"
        callback={() => {}}
        placeholder="Find Cars"
      />

      <Search
        background="black"
        color="green"
        callback={(value) => {}}
        placeholder="Find Hotels"
        placeColor="orange"
        iconColor="orange"
        noborder
      />
            <button type="button" className="head_trigger desktop_trigger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button type="button" className="head_trigger mobile_trigger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
}

// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
//@media (min-width: 1400px) { ... }
