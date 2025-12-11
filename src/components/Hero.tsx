import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tight">Richard Borges</h1>
      <p className="text-lg text-muted-foreground max-w-xl">
        Frontend Developer passionate about building beautiful and accessible web experiences.
      </p>
      <Button className="animate-bounce">Contact Me</Button>
    </section>
  );
}
