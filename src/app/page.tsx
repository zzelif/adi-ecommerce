import Hero from "@/components/hero";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero />
      <div className="mx-auto max-w-7xl">
        <Categories />
      </div>
    </div>
  );
}
