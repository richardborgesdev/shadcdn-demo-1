import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section className="py-12 animate-fade-in-up">
      <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example project card */}
        <div className="bg-card p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-muted-foreground mb-4">A personal portfolio built with Vite, React, and ShadCN UI.</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </div>
        {/* Add more project cards here, using Button for links */}
      </div>
    </section>
  );
}
