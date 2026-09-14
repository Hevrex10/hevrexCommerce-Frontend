import BestSelling from "@/components/BestSelling";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Browse from "../../components/Browse";
import FeaturedandLatest from "@/components/FeaturedandLatest";

export default function Page() {
  return (
    <main>
      <Hero />
      <Service />
      <BestSelling />
      <Browse />
      <FeaturedandLatest />
    </main>
  );
}
