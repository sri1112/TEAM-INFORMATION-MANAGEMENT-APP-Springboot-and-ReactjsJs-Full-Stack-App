import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import "./App.css";
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function Home() {
  return (
    <div className="App">
      {/* <Jumbotron fluid> */}
        <Container>
          <h1>Welcome to My React Home Page</h1>
          <p>This is a simple example of a React home page.</p>
        </Container>
      {/* </Jumbotron> */}
      <main>
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>We are a team of developers creating amazing web applications.</p>
            </Col>
            <Col>
              <h2>Contact</h2>
              <p>Contact us at contact@example.com</p>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <p>&copy; 2023 My React Home Page</p>
      </footer>
    </div>
  );
}

export default Home;
