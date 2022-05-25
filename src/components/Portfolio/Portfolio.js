import React from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import "./Portfolio.css";
import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.jpg";
import myimg from '../../img/bg1.png';

const Portfolio = () => {
  return (
    <div className="container-fulid">
      <div className="container my-5">
        <div className="row g-3 mb-5">
          <div className="col-md-6 col-12 ">
            <p className="mb-3 text-center text-lg-start d-flex justify-content-center align-items-center">
              <img src={myimg} className='img-fluid w-50  rounded-pill' alt=" my images" />
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
              <Card.Img variant="top" src={project1} />
              <Card.Body>
                <Card.Title> Hanu Studio - VFX STUDIO</Card.Title>

                <button className=" btn btn-outline-dark"> Live Perview</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-12 ">
            <Card className="border-none">
              <Card.Img variant="top" src={project2} />
              <Card.Body>
                <Card.Title> Mordano Ferniture e-Commerce</Card.Title>

                <button className=" btn btn-outline-dark">Live Perview</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 col-12 ">
            <Card className="border-none">
              <Card.Img variant="top" src={project3} />
              <Card.Body>
                <Card.Title> Sareen Protfolio</Card.Title>

                <button className=" btn btn-outline-dark">Live Perview</button>
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
