import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import News from "../types/News";
import HeadingSection from "./HeadingSection";
import SingleNews from "./SingleNews";
//functional component below!

const Gallery = () => {
  const [news, setNews] = useState<News[]>([]);
  //<News[]> is an interface stored in folder types, which holds info bout all the data we get from our API (it's a must have in TS)
  //   to use states with initial value as an Array, we have to define an interface for it.
  useEffect(() => {
    fetchNews();
  }, []); //empty array at the end here to fetch just once
  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        const data: News[] = await response.json(); //News[] is an interface, again.
        setNews(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid id="app">
      <HeadingSection />
      <Row className="row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 m-5">
        {news.map((n) => {
          return (
            <Col key={n.id} className="p-1">
              <SingleNews news={n} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Gallery;
