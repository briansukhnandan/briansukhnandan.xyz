import { Home } from "../home";
import { getCarouselImages } from "@/lib/home";

export default function HomePage() {
  return <Home carouselImages={getCarouselImages()} />;
}
