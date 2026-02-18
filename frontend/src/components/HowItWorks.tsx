import { Search, Sliders, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Browse Classes",
    desc: "Explore our library of 200+ classes—from gentle stretch to power flow.",
  },
  {
    icon: Sliders,
    title: "Choose Your Level",
    desc: "Filter by difficulty, duration, and style. Perfect for beginners and advanced practitioners.",
  },
  {
    icon: Zap,
    title: "Practice Anywhere",
    desc: "Stream on any device. Your yoga studio goes wherever you go.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export const HowItWorks = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">How It Works</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
