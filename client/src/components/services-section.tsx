import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  Scissors, 
  Square, 
  Droplets, 
  TreePine, 
  Calendar,
  ArrowRight,
  Star
} from "lucide-react";
import frontYardImage from "@assets/0aaff3cc-7482-4408-b6c6-72a18799c3cd_1757718312038.png";
import sprinklerSystemImage from "@assets/image_1757718606582.png";
import workersCleanupImage from "@assets/image_1757718629542.png";
import landscapeDesignYardImage from "@assets/landscape-design-yard.png";
import treeHedgeShearsImage from "@assets/tree-hedge-shears.png";
import hardscapingPatioImage from "@assets/hardscaping-patio.png";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Landscape Design",
      description: "Custom landscape design that reflects your style and enhances your property's natural beauty.",
      image: landscapeDesignYardImage,
      features: [
        "3D Design Visualization",
        "Plant Selection & Placement",
        "Hardscape Integration"
      ],
      badge: "Most Popular",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: <Scissors className="w-6 h-6 text-white" />,
      title: "Lawn Care & Maintenance",
      description: "Keep your lawn healthy and beautiful year-round with our comprehensive care programs.",
      image: frontYardImage,
      features: [
        "Regular Mowing & Edging",
        "Fertilization Programs",
        "Weed & Pest Control"
      ],
      badge: "Weekly Service",
      gradient: "from-accent to-secondary"
    },
    {
      icon: <Square className="w-6 h-6 text-white" />,
      title: "Hardscaping",
      description: "Transform your outdoor space with beautiful patios, walkways, and retaining walls.",
      image: hardscapingPatioImage,
      features: [
        "Patios & Walkways",
        "Retaining Walls",
        "Water Features"
      ],
      badge: "Premium",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: <Droplets className="w-6 h-6 text-white" />,
      title: "Irrigation Systems",
      description: "Efficient watering solutions that save time and water while keeping your landscape thriving.",
      image: sprinklerSystemImage,
      features: [
        "Sprinkler Installation",
        "Drip Irrigation",
        "Smart Controllers"
      ],
      badge: "Water-Smart",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      icon: <TreePine className="w-6 h-6 text-white" />,
      title: "Tree & Shrub Care",
      description: "Professional tree and shrub maintenance to enhance health, safety, and aesthetic appeal.",
      image: treeHedgeShearsImage,
      features: [
        "Pruning & Trimming",
        "Disease Treatment",
        "Tree Removal"
      ],
      badge: "Expert Care",
      gradient: "from-primary/70 to-secondary/70"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Seasonal Cleanup",
      description: "Prepare your landscape for each season with our comprehensive cleanup services.",
      image: workersCleanupImage,
      features: [
        "Spring Cleanup",
        "Fall Leaf Removal",
        "Winter Preparation"
      ],
      badge: "Seasonal",
      gradient: "from-accent/80 to-primary/60"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Professional Services
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="services-title">
            Transform Your <span className="gradient-text">Landscape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="services-description">
            From design to maintenance, we offer comprehensive landscaping solutions tailored to your needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift bg-gradient-to-br from-card via-card to-card/95 shadow-2xl border-0 overflow-hidden relative"
              data-testid={`service-card-${index}`}
            >
              {/* Service Badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-lg`}>
                  {service.badge}
                </Badge>
              </div>
              
              {/* Image with Overlay */}
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`service-image-${index}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3" data-testid={`service-features-${index}`}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Learn More Arrow */}
                <div className="pt-4">
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors cursor-pointer">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
              <Star className="w-5 h-5 text-accent fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts will work with you to create the perfect landscaping plan for your unique space and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </button>
              <span className="text-sm text-muted-foreground">
                💚 100% Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}