import React from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Profile from "../../assets/images/profile.jpg";
import styles from "./AboutMe.module.css";


const AboutMe = () => {
    return (
        <div id="about">
        <div className={styles.about}>
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image 
                    className={[styles.profile, 'justify-content-end'].join(' ')} 
                    alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hello there! I am <strong>&nbsp;Mezbaul Abedin Forhan</strong>
                  <br />An aspiring  MERN stack developer and a Coach, born and brought up in Bangladesh. .
                  <br />
                  I  am currently studying CSE .I will be graduated in 2021.
                  <br />
                  Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
                  Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                  <br />I love solving problems and learning new technologies.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/abedinforhan" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/mezbaul-abedin-forhan-59b7001b7/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default AboutMe;