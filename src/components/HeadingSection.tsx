import { Col, Container, Row } from "react-bootstrap";

const HeadingSection = () => {
  return (
    <Container className="text-center py-4">
      <Row>
        <Col md={8} className="mx-auto">
          <h1>Welcome to SpaceX News</h1>
          <p className="lead text-muted">
            The best Space Flight News The Internet can offer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default HeadingSection;
