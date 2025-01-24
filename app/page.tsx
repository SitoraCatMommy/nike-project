import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import PopularProroduct from "./sections/PopularProduct";
import SuperQuality from "./sections/SuperQuality"

export default function Home() {
  return (
    <main>
      <Navigation/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProroduct/>
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality/>
      </section>
    </main>
  );
}
