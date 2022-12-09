import Launch from "./Launch";
import Event from "./Event";

interface News {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

export default News;
