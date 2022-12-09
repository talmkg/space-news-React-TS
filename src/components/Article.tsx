import { useEffect } from "react";
import { Row, Col, Container, Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import News from "../types/News";

const Article = () => {
  const params = useParams();
  const articleId = params.articleId;
  const [article, setArticle] = useState<News | null>(null); //null -> initial value
  useEffect(() => {
    fetchArticle();
  }, []);
  const fetchArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + articleId
      );
      if (response.ok) {
        const data: News = await response.json(); //News[] is an interface, again.
        setArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container id="article" className="mt-3">
      <Row>
        <Col>
          <>
            {article ? (
              <div className="text-center">
                <img
                  src={article?.imageUrl}
                  alt="article-pic"
                  className="w-50 ratio m-2"
                />
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <p>
                  Posted at:{" "}
                  {new Date(article.publishedAt).toLocaleTimeString("en-US")}
                </p>

                <Button onClick={() => window.location.assign(article.url)}>
                  Read the full article
                </Button>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner variant="info" animation="border" />
              </div>
            )}
          </>
        </Col>
      </Row>
    </Container>
  );
};
export default Article;
