import { useState } from "react";
import { Card, CardImg, Container, Image } from "react-bootstrap";

const LegendCard = ({ img, name, statistics }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Container>
        <Card role="button" onClick={() => setShow(!show)}>
          {show ? (
            <Image src={img} rounded />
          ) : (
            <Card.Body>
              {statistics.map((item) => (
                <ul>
                  <li>⚽{item}</li>
                </ul>
              ))}
            </Card.Body>
          )}
        </Card>
      </Container>
    </>
  );
};

export default LegendCard;
