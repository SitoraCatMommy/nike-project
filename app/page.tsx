import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";


export default function Home() {
  return (
    <main>
      <Navigation/>
      <section className="xl:padding-l wide:padding-r padding-b">

        <Hero/>

      </section>
    </main>
  );
}
