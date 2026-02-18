import { Play, Users, Smartphone, Gift } from "lucide-react";

const items = [
  { icon: Play, text: "200+ Classes" },
  { icon: Users, text: "Expert Instructors" },
  { icon: Smartphone, text: "Stream Anywhere" },
  { icon: Gift, text: "Start Free" },
];

export const TrustBanner = () => (
  <section className="border-y bg-muted/50 py-4">
    <div className="container">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-2 text-foreground">
            <Icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{text}</span>
            {i < items.length - 1 && (
              <span className="ml-2 hidden text-muted-foreground/50 md:inline">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
