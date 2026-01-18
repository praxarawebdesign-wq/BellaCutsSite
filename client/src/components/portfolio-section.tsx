import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const featuredProject = {
    title: "Modern Backyard Oasis",
    description: "Complete transformation of a neglected backyard into a stunning modern outdoor living space. Features include natural stone patios, contemporary plantings, and integrated lighting.",
    beforeImage: "https://images.unsplash.com/photo-1574906938146-b8b4c2b6e391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    afterImage: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    features: [
      "Custom Stone Patio Design",
      "Native Plant Installation",
      "Integrated Landscape Lighting",
      "Automated Irrigation System"
    ],
    timeline: "3 weeks"
  };

  const projects = [
    {
      title: "Front Yard Makeover",
      description: "Curb appeal transformation with drought-resistant plants and modern hardscaping.",
      image: "https://images.unsplash.com/photo-1606231890731-84ac59cab9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Residential",
      timeline: "2 weeks"
    },
    {
      title: "Corporate Campus",
      description: "Large-scale commercial landscaping with sustainable design principles.",
      image: "https://images.unsplash.com/photo-1533740566848-5f7d4ddf5646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Commercial",
      timeline: "6 weeks"
    },
    {
      title: "Zen Garden Retreat",
      description: "Peaceful garden sanctuary with water features and meditation spaces.",
      image: "https://images.unsplash.com/photo-1594736797933-d0601ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Residential",
      timeline: "4 weeks"
    },
    {
      title: "Poolside Paradise",
      description: "Tropical-inspired pool area with lush plantings and entertainment spaces.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Residential",
      timeline: "5 weeks"
    },
    {
      title: "Urban Rooftop",
      description: "High-rise rooftop transformation with wind-resistant plants and city views.",
      image: "https://images.unsplash.com/photo-1459679749800-4f8e8d1e7e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Commercial",
      timeline: "3 weeks"
    },
    {
      title: "Edible Garden",
      description: "Productive vegetable garden with raised beds and efficient irrigation.",
      image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      type: "Residential",
      timeline: "2 weeks"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="portfolio-title">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-description">
            See the dramatic transformations we've achieved for our clients. Each project tells a story of vision, craftsmanship, and natural beauty.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Card className="bg-card shadow-xl border border-border overflow-hidden" data-testid="featured-project">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="space-y-4 p-0">
                <div className="relative">
                  <div className="text-sm font-medium text-muted-foreground mb-2 px-6 pt-6">BEFORE</div>
                  <img 
                    src={featuredProject.beforeImage} 
                    alt="Before landscaping transformation" 
                    className="w-full h-64 object-cover"
                    data-testid="featured-before-image"
                  />
                </div>
                <div className="relative">
                  <div className="text-sm font-medium text-muted-foreground mb-2 px-6">AFTER</div>
                  <img 
                    src={featuredProject.afterImage} 
                    alt="After landscaping transformation" 
                    className="w-full h-64 object-cover"
                    data-testid="featured-after-image"
                  />
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4" data-testid="featured-project-title">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="featured-project-description">
                  {featuredProject.description}
                </p>
                <div className="space-y-4">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`featured-feature-${index}`}>
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">Project Timeline:</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary" data-testid="featured-timeline">
                    {featuredProject.timeline}
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <CardContent className="p-6">
                <h4 className="font-serif text-lg font-semibold mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground" data-testid={`project-type-${index}`}>
                    {project.type}
                  </span>
                  <Badge variant="secondary" className="bg-accent/10 text-accent" data-testid={`project-timeline-${index}`}>
                    {project.timeline}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 shadow-lg"
            data-testid="portfolio-cta"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
