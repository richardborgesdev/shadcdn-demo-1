
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
