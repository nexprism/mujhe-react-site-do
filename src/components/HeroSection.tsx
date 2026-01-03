import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">#1 Business Platform in 2025</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Transform Your{" "}
              <span className="gradient-text">Business</span>{" "}
              With Modern Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Empower your company with cutting-edge tools and strategies designed to accelerate growth and maximize success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight size={20} />
              </Button>
              <Button variant="hero-outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-3xl shadow-2xl border border-border p-8">
                <div className="h-full flex flex-col justify-center items-center">
                  {/* Dashboard Mock */}
                  <div className="w-full space-y-4">
                    <div className="h-4 w-2/3 bg-primary/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-accent/20 rounded-full" />
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl" />
                      <div className="h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl" />
                    </div>
                    <div className="h-32 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl mt-4" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-primary-foreground text-2xl font-bold">📈</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-card rounded-xl shadow-lg border border-border flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
