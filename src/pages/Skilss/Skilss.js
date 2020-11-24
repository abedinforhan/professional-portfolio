import React, { useState } from 'react';
//bootstrap
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './Skils.css';
//skilss
import { skills } from './SkilsData';



const Skilss = () => {
  const [skillsData ,setSkillsData] = useState(skills) 
  console.log(skillsData);
    return (
    <div className="skills pt-3 pb-3" id="skills">
        <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            {/* Frontend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  {/* Frontend */}
                  <Card.Title className="text-center  card-title">Frontend</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {
                        skillsData.frontend.map((skill, index) => (
                         <span className="p-2" key={index}>
                         <Image 
                         src={skill.imagesSrc} 
                         alt={skill.imagesAltText} 
                         rounded 
                         className="image-style m-1">
                         </Image>
                         {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
  
            {/* Backend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Backend</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skillsData.backend.map((skill, index) => (
                        <span className="p-2" key={index}>
                        <Image 
                           src={skill.imagesSrc} 
                            alt={skill.imagesAltText} rounded className="image-style m-1"></Image> {
                             skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
  
              {/* Hosting Platforms */}
              <Card className="focus mt-2 mb-2 ">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                     {
                        skills.hostingPlatforms.map((skill, index) => (
                          <span className="p-2" key={index}>
                          <Image src={skill.imagesSrc} alt={skill.imagesAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                        </span>
                       ))
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
  
            {/* Programming Languages */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.programmingLanguages.map((skill, index) => (
                      <span className="p-2" key={index}>
                          <Image src={skill.imagesSrc} alt={skill.imagesAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
  
              {/* Database */}
  
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Database</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.databases.map((skill, index) => (
                      <span className="p-2" key={index}>
                          <Image src={skill.imagesSrc} alt={skill.imagesAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Version Control */}
  
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center  card-title">Version Control</Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    <span className="p-2">
                         <Image src={skills.versionControl[0].imagesSrc} alt={skills.versionControl[0].imagesAltText} rounded className="image-style m-1">
                      </Image> {skills.versionControl[0].skillName}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </div>
    );
};

export default Skilss;