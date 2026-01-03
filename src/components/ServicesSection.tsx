import { motion } from "framer-motion";
import { Rocket, Shield, BarChart3, Zap, Globe, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Growth Strategy",
    description: "Accelerate your business growth with data-driven strategies tailored to your unique goals.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security protecting your data and your customers' trust.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Deep insights and real-time analytics to make informed decisions quickly.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast solutions that keep your business running at peak efficiency.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand your presence worldwide with our international support and infrastructure.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock expert support to help you succeed at every step.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions designed to help your business thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border card-hover">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
