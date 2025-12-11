import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-12 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="email" placeholder="Your email" className="input input-bordered" />
        <textarea placeholder="Your message" className="input input-bordered" rows={4} />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
