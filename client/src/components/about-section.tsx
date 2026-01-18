import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Shield } from "lucide-react";
import frontYardImage from "@assets/0aaff3cc-7482-4408-b6c6-72a18799c3cd_1757718312038.png";

export default function AboutSection() {
  const values = [
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We strive for perfection in every project, no matter the size."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      description: "Environmentally responsible practices in all our work."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "Honest communication and reliable service you can trust."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="about-title">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="about-story-1">
              Founded in 2008, GreenScape Pro Landscape & Lawn Care Company began with a simple mission: 
              to transform outdoor spaces into beautiful, sustainable environments that enhance people's lives.
            </p>
            <p className="text-muted-foreground mb-6" data-testid="about-story-2">
              What started as a small family business has grown into a trusted team of landscape professionals 
              serving the community with dedication, expertise, and a commitment to excellence. We believe that 
              every outdoor space has potential, and we're passionate about bringing that vision to life.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div data-testid="stat-years">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div data-testid="stat-clients">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div data-testid="stat-awards">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
              <div data-testid="stat-licensed">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Licensed & Insured</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={frontYardImage} 
              alt="Beautiful landscaping and garden design" 
              className="rounded-xl shadow-lg w-full"
              data-testid="about-company-image"
            />
            <Card className="absolute -bottom-6 -right-6 bg-card p-6 shadow-lg border border-border">
              <CardContent className="p-0">
                <div className="text-lg font-semibold text-foreground">Certified Professionals</div>
                <div className="text-sm text-muted-foreground">Licensed & Insured</div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4" data-testid="values-title">
              Our Values
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-testid={`value-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3" data-testid={`value-title-${index}`}>
                  {value.title}
                </h4>
                <p className="text-muted-foreground" data-testid={`value-description-${index}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
