import React from 'react'
import Card from 'react-bootstrap/Card'

const JobsCard = (props) =>{
    return(
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="themebgColor text-center">
            Click me!  
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application. Therefore, a basic understanding of front-end technologies is necessary as well.</Card.Body>
          </Accordion.Collapse>
        </Card>
    );
}