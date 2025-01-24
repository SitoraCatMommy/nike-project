import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import PopularProroduct from "./sections/PopularProduct";


export default function Home() {
  return (
    <main>
      <Navigation/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section>
        <PopularProroduct/>
      </section>
    </main>
  );
}
