import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  "10+ years of industry experience",
  "Trusted by Fortune 500 companies",
  "99.9% uptime guarantee",
  "Dedicated account managers",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              
              {/* Main Image Container */}
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-muted to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-5xl">🏢</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">NexaBiz HQ</h3>
                    <p className="text-muted-foreground">Building the future together</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
              >
                <div className="text-3xl font-heading font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
              We're On a Mission to{" "}
              <span className="gradient-text">Revolutionize</span>{" "}
              Business
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Since 2015, NexaBiz has been at the forefront of business innovation. We believe in creating solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="gradient" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
