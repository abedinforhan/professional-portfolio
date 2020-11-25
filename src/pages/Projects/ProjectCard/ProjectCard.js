//timeline 
import { ImageEvent, UrlButton } from '@merc/react-timeline';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";


const ProjectCard = ({name ,description, imgSrc,technologies , features,liveUrl,clientUrl,serverUrl}) => {
    
    return (
          <ImageEvent
            date = ""
            src={imgSrc}
            alt="swimming jellyfish"
            text={name}
            >
           <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                     <Card>
                       <Accordion.Toggle
                         as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                       <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                             
                             <strong className='pr-2'>Description:</strong> 
                              {description}
                             <hr />
                           
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                               {
                                   features.map(feature =>
                                   <li>{feature}</li>
                                   )
                               }
                           </ul>
                          <hr />
                          
                          <strong>Technology used:</strong>
                          <ul>
                             {
                               technologies.map(technology =>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={technology.image}
                                        alt={technology.name}
                                        rounded
                                        className="image-style m-1"
                                        ></Image>
                                   {technology.name}
                                    </span> 
                              </li>
                                )
                             }
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href={liveUrl}
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href={clientUrl}
                  target="_blank"
                >
                  CLIENT SIDE CODE
                </UrlButton>
                <UrlButton
                  href={serverUrl}
                  target="_blank"
                >
                  SERVER SIDE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        
    );
};

export default ProjectCard;




