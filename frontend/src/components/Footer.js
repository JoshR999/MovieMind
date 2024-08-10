// src/components/Footer.js

import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-white mt-5 p-2">
//       <Container>
//         <Row>
//           <Col md="4">
//             <h5>About MovieMind</h5>
//             <p>
//               MovieMind is your go-to app for discovering and tracking your
//               favorite movies. Stay updated with the latest releases and
//               reviews.
//             </p>
//           </Col>
//           <Col md="4">
//             <h5>Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="/" className="text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-white">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="/privacy" className="text-white">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </Col>
//           <Col md="4">
//             <h5>Contact Us</h5>
//             <address>
//               123 Movie St.
//               <br />
//               Filmtown, FT 45678
//               <br />
//               Email: info@moviemind.com
//               <br />
//               Phone: (123) 456-7890
//             </address>
//           </Col>
//         </Row>
//         <Row>
//           <Col md="12" className="text-center">
//             <p className="mt-3">
//               &copy; {new Date().getFullYear()} MovieMind. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

function Footer() {
  const impAlert = () => {
    alert(`Sorry! Page not implemented yet!`)
  }

  return (
    <Container fluid className="footerContainer">
      <Row>
        <Col>
          <h5>About MovieMind</h5>
          <p>
            MovieMind is your go-to app for discovering and tracking your
            favorite movies. Stay updated with the latest releases and
            reviews.
          </p>
        </Col>
        <Col>
          <h5>Links</h5>
          <ListGroup>
            <ListGroup.Item action href="/" variant="secondary">
              Home
            </ListGroup.Item>
            <ListGroup.Item action onClick={impAlert} variant="danger">
              About
            </ListGroup.Item>
            <ListGroup.Item action onClick={impAlert} variant="danger">
              Privacy Policy
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <address>
            123 Movie Street
            <br />
            Filmtown, FT 45678
            <br />
            E-Mail: info@moviemind.com
            <br />
            Phone: (123)-456-7890
          </address>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
