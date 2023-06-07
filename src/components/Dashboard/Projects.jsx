import React from 'react';
import projectImg1 from '../../assets/portfolio/project1.png';
import projectImg2 from '../../assets/portfolio/project2.png';
import projectImg3 from '../../assets/portfolio/project3.png';
import projectImg4 from '../../assets/portfolio/project4.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Here you'll explore a collection of both personal and client projects that I have crafted, each accompanied by its own dedicated case study.
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={projectImg4}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">E-HAS</h3>
              <p class="projects__row-content-desc">
                E-HAS (Electronic Halal Assurance System) is a system that aimed to provide small and medium enterprises with a streamlined process to obtain halal certification for their products from MUI (Majelis Ulama Indonesia, the Indonesian Council of Ulama).
              </p>
              <Link
                to="/projects/e-has" 
                class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</Link
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={projectImg3}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">PERSANI - Central Java</h3>
              <p class="projects__row-content-desc">
                UI/UX project for PERSANI (Indonesian Gymnastics Association) - Central Java, a government organization focused on gymnastics. The project involved creating a high-fidelity prototype for an athlete and data management platform.
              </p>
              <Link
                to="/projects/persani" 
                class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</Link
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={projectImg2}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">OurGym</h3>
              <p class="projects__row-content-desc">
                OurGym is a Gym Membership system which of course is engaged in sports. This app provide gym class, mentoring, booking system, and payment gateway via third party.
              </p>
              <Link
                to="/projects/ourgym" 
                class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</Link
              >
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src={projectImg1}
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">angkutaja</h3>
              <p class="projects__row-content-desc">
                angkutaja is a website created to address the house moving needs, especially the transfer of boarding houses for college students in Semarang. It offers a streamlined solution for booking and managing house relocations.
              </p>
              <Link
                to="/projects/angkutaja" 
                class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</Link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects