import { useState } from "react";
import { Card, Col, Image } from "react-bootstrap";

const LegendCard = ({ img, name, statistics }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Col xs={10} sm={8} md={6} lg={4} xl={3}>
        <Card className="player-card" role="button" onClick={() => setShow(!show)}>
        <Card.Title>{name}</Card.Title>
          {show ? (
            // <Image src={img} rounded />
            <Card.Img  variant="top"
            title={name}
            src={img}
          />
          ) : (
            <Card.Body>
              {statistics.map((item) => (
                <ul className="ms-5">
                  <li className="list-unstyled h5 text-start ">⚽{item}</li>
                </ul>
              ))}
               
                 
               
            </Card.Body>
            
          )}
         
        
           
   
          </Card>
      </Col>
    </>
  );
};

export default LegendCard;
