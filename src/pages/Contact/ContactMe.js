import React from 'react';
//bootstarp
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './ContactMe.css';



const ContactMe = () => {
    return (
        <Container  fluid id="contact" className='contactMe py-5 bg-light'>
           <Row>
              <Col md={10}  className='form mx-auto'>
                <h3 className='text-center my-3'>Let's Talk About Technology</h3>
              <Form> 
                <Row>
                   <Col>
                      <Form.Label>First Name</Form.Label>
                       <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                       <Form.Label>Last Name</Form.Label>
                       <Form.Control placeholder="Last name" />
                    </Col>
                 </Row>
                  <br/>
                 <Row>
                    <Col>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                             <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                           </Form.Text>
                           <Form.Group controlId="exampleForm.ControlTextarea1">
                            <br/>
                           <Form.Label>Message</Form.Label>
                             <Form.Control maxLength='100' as="textarea" rows={3} />
                          </Form.Group>
                         </Form.Group>
                     <Button variant="primary" type="submit">
                        Submit
                     </Button>
                    </Col> 
                </Row> 
              </Form>
            </Col>
          </Row>
      </Container>
    );
};

export default ContactMe;