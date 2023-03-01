import React, { Component } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Profile from "../../img/pp.JPG";
import projectOne from "../../img/p1.png";
import projectTwo from "../../img/p2.png";
import projectthree from "../../img/p3.jpeg";
import projectFour from "../../img/p4.jpeg";
import projectFive from "../../img/p5.png";
import projectSix from "../../img/p3.jpeg";

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <Container>
          <section id="home">
            <div className="home-section">
              <img src={Profile} alt="foto-profile" />

              <div className="content">
                <h1>anwar</h1>
                <p>web front end developer</p>
                <div className="button-container">
                  <Button variant="outline-dark">Download Cv</Button>
                  <Button variant="outline-dark mx-2">Hire Me</Button>
                </div>
              </div>
            </div>
          </section>

          <section id="about">
            <div className="about-section">
              <h1 className="title">about us</h1>
              <div className="about-content">
                <div className="content-one">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi exercitationem vel ipsum quas dolores quidem esse est
                    totam beatae, omnis praesentium consectetur quos quia
                    aliquid nam doloremque asperiores nemo, sit dolor porro ea.
                    Veniam mollitia dignissimos, esse, sed iusto excepturi cum
                    accusantium impedit, ut fugit dolorum! Pariatur rem dolorem
                    est.
                  </p>
                </div>
                <div className="content-two">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi exercitationem vel ipsum quas dolores quidem esse est
                    totam beatae, omnis praesentium consectetur quos quia
                    aliquid nam doloremque asperiores nemo, sit dolor porro ea.
                    Veniam mollitia dignissimos, esse, sed iusto excepturi cum
                    accusantium impedit, ut fugit dolorum! Pariatur rem dolorem
                    est.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="project">
            <h1 className="title">project</h1>
            <div className="project-container">
              <div className="card-project">
                <img src={projectOne} alt="Project One" />
                <div className="project-content">
                  <h3>project 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button>Visit</Button>
                </div>
              </div>

              <div className="card-project">
                <img src={projectTwo} alt="Project One" />
                <div className="project-content">
                  <h3>project 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button>Visit</Button>
                </div>
              </div>

              <div className="card-project">
                <img src={projectthree} alt="Project One" />
                <div className="project-content">
                  <h3>project 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button>Visit</Button>
                </div>
              </div>

              <div className="card-project">
                <img src={projectFour} alt="Project One" />
                <div className="project-content">
                  <h3>project 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button>Visit</Button>
                </div>
              </div>

              <div className="card-project">
                <img src={projectFive} alt="Project One" />
                <div className="project-content">
                  <h3>project 5</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button>Visit</Button>
                </div>
              </div>

              <div className="card-project">
                <img src={projectSix} alt="Project One" />
                <div className="project-content">
                  <h3>project 6</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, voluptas!
                  </p>
                  <Button className="btn btn-primary">Visit</Button>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="contact-section">
              <h1 className="title">contact</h1>
              <Form className="form-container">
                <Row className="mb-3 g-2">
                  <Form.Group md as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>

                  <Form.Group md as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Row>

                <Row className="mb-3 g-2">
                  <Form.Group md as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>

                  <Form.Group md as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone Number"
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Addres</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Addres"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
