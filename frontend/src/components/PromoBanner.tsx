import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const YOGA_IMAGE = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=600&fit=crop";

export const PromoBanner = () => (
  <section className="relative overflow-hidden py-16">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${YOGA_IMAGE})` }}
    />
    <div className="absolute inset-0 bg-primary/90" />
    <div className="container relative text-center">
      <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
        New to Yoga? Start with Our Free Beginner Series
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
        No experience needed. Our expert instructors will guide you through gentle flows designed for absolute beginners.
      </p>
      <Button size="lg" variant="secondary" className="mt-8" asChild>
        <Link to="/free-videos">
          Browse Free Classes <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);
