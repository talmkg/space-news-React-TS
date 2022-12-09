import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import News from "../types/News";
interface SingleNewsProps {
  news: News;
  //same interface for fetch cuz same data
}
const SingleNews = ({ news }: SingleNewsProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img variant="top" src={news.imageUrl} className="ratio" />
      <Card.Body>
        <Card.Title className="text-truncate">{news.title}</Card.Title>
        <Card.Text className="text-truncate">{news.summary}</Card.Text>
        <Card.Text className="text-truncate">
          Posted at: {new Date(news.publishedAt).toLocaleTimeString("en-US")}
        </Card.Text>
        <Card.Text className="text-center">
          <Button
            variant="info"
            onClick={() => navigate("/article/" + news.id)}
          >
            Read more...
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleNews;
