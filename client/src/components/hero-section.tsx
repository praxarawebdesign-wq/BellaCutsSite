import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import frontYardImage from "@assets/0aaff3cc-7482-4408-b6c6-72a18799c3cd_1757718312038.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Real Garden Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" 
        style={{ 
          backgroundImage: `url(${frontYardImage})`
        }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" data-testid="hero-title">
            Transform Your
            <span className="text-primary block gradient-text">Outdoor Paradise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }} data-testid="hero-description">
            Professional landscaping, lawn care, and maintenance services that bring your vision to life. 
            Creating beautiful, sustainable outdoor spaces for over 15 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="hero-cta-estimate"
            >
              Get Free Estimate
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              data-testid="hero-cta-services"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border border-border" data-testid="stat-experience">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border border-border" data-testid="stat-projects">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg border border-border" data-testid="stat-satisfaction">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}