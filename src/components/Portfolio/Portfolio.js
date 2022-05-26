import React from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import "./Portfolio.css";
import project2 from "../../images/project-1.png";
import project3 from "../../images/project-2.png";
import project1 from "../../images/project-4.png";
import myimg from '../../img/bg1.png';

const Portfolio = () => {
  return (
    <div className="container-fulid">
      <div className="container my-5">
        <div className="row g-3 mb-5">
          <div className="col-md-6 col-12 ">
            <p className="mb-3 text-center text-lg-start d-flex align-items-center">
              <img src={myimg} className='img-fluid  w-25  rounded-pill' alt=" my images" />
              <span className="title">MERN Stack Web Developer</span>
            </p>
            <h2 className="my-name">
              Hello, I’m <span>SaJeeb</span> Ahmed
            </h2>
            <p className="my-intro">
              Passionate to work as a MERN Stack Web Developer for a software
              firm where I can leverage my talents in Web Design, Front-End and
              Back-End Web Development to give excellent customer service.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1HwRIZKdZnob4iVQ9vkfjosgdsfgdsdfgk7DD14qXssm/viewf"
              className="download-btn"
            >
              Download CV
            </a>
          </div>

          <div className="col-md-6 col-12 ">
            <Card className="shadow" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <div>
                    <span>
                      <strong>Email:</strong>
                    </span>{" "}
                    <span>sajeeb.web@gmail.com</span>
                  </div>

                </Card.Subtitle>
                <Card.Text>
                  <div className="mb-3">
                    <div className="mb-2">
                      <span>
                        <strong>Mongo:</strong>
                      </span>
                      <ProgressBar animated variant="success" now={70} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>Express:</strong>
                      </span>
                      <ProgressBar animated variant="danger" now={80} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>React:</strong>
                      </span>
                      <ProgressBar animated variant="info" now={90} />
                    </div>
                    <div className="mb-2">
                      <span>
                        <strong>Node:</strong>
                      </span>
                      <ProgressBar animated variant="warning" now={60} />
                    </div>
                  </div>
                </Card.Text>
                <h6 className="text-muted">
                  <strong>Address : Narsingdi, Dhaka, Bangladesh</strong>
                </h6>

              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row g-lg-5">
          <h2 className="mb-3 text-center uppercase">
            My Projects
          </h2>

          <div className="col-md-4 col-12 ">
            <Card className="border-none">
              <Card.Img variant="top " className="object-cover img-fluid" src={project1} />
              <Card.Body>
                <Card.Title className="color-2"> Hanu Studio - VFX STUDIO</Card.Title>
                <Card.Text>Hanu Studios is to create incredible VFX and 3-D animation.We care deeply about the quality of our services which is why we commit only if we are sure about our ability to deliver the best.</Card.Text>
                <a rel="noreferrer" target='_blank' href="https://www.hanustudios.com/"> <button className=" btn btn-outline-info"> Live Perview  </button> </a>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-12 ">
            <Card className="border-none">
              <Card.Img variant="top" className="object-cover img-fluid" src={project2} />
              <Card.Body>
                <Card.Title className="color-2"> Mordano Ferniture e-Commerce</Card.Title>

                <Card.Text> Worldwide transport is available use by the general public, distinct from modes such as taxicab, carpooling, or hired buses.Logistics management involves identifying prospective distributors.</Card.Text>
                <a rel="noreferrer" target='_blank' href="https://analyzme-furniture.web.app/"> <button className=" btn btn-outline-info"> Live Perview  </button> </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-12 ">
            <Card className="border-none">
              <Card.Img variant="top" className="object-cover img-fluid" src={project3} />
              <Card.Body>
                <Card.Title className="color-2"> Sareen Protfolio</Card.Title>
                <Card.Text>We study industries, competitors and consumers. We collect and analyze data to make reasoned decisions.you can see great breakthroughs and tips to learn and grow as a person.".</Card.Text>
                <a rel="noreferrer" target='_blank' href="https://sareen-hopeless-melancholiaa.web.app/"> <button className=" btn btn-outline-info"> Live Perview  </button> </a>
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
