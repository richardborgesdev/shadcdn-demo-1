
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Layout } from "./components/Layout";

function App() {
  const layoutProps = {
    avatar: <Hero />,
    slot02: <Projects />,
    slot03: <Contact />,
  };

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <Layout {...layoutProps}/>
    </main>
  );
}

export default App;
