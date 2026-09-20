import { Home } from "./home";
import { getCarouselImages } from "@/lib/home";

export default function Page() {
  return <Home carouselImages={getCarouselImages()} />;
}
