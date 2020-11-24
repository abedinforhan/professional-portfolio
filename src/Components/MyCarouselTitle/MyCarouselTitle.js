import React from 'react';
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const MyCarouselTitle = () => {
    return (
        <MyTitleMessage>
        <div className="titleMessage">
        <div className="heading">
            <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
                <strong>Mezbaul Abedin Forahn</strong>
            </span>
            </div>
            <div className="sub">
            <Typewriter
                options={{
                strings: ["Web Developer", "Coach", "Learner"],
                autoStart: true,
                loop: true,
                delay: 50
                }}
            />
            <a href="https://drive.google.com/file/d/1U_v7qeQfL65UFSMlHGVxh5K2bxungiNq/view?usp=sharing">
            <Button className="m-2 px-3" variant="danger" size="md"
            >Let's Talk</Button>
            </a>
            </div>
        </div>
        </div>
  </MyTitleMessage>
    );
};

export default MyCarouselTitle;