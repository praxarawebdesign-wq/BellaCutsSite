import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: insertContactSubmissionSchema.shape.firstName.min(1, "First name is required"),
  lastName: insertContactSubmissionSchema.shape.lastName.min(1, "Last name is required"),
  email: insertContactSubmissionSchema.shape.email.email("Invalid email address"),
  phone: insertContactSubmissionSchema.shape.phone.min(1, "Phone number is required"),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      projectDetails: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent Successfully!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Ready to transform your outdoor space? Contact us for a free consultation and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card shadow-lg border border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6" data-testid="contact-form-title">
                Request a Free Estimate
              </h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      {...form.register("firstName")}
                      className="mt-2"
                      data-testid="input-firstName"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-destructive text-sm mt-1" data-testid="error-firstName">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      {...form.register("lastName")}
                      className="mt-2"
                      data-testid="input-lastName"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-destructive text-sm mt-1" data-testid="error-lastName">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@email.com"
                    {...form.register("email")}
                    className="mt-2"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...form.register("phone")}
                    className="mt-2"
                    data-testid="input-phone"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-phone">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </Label>
                  <Select onValueChange={(value) => form.setValue("service", value)} data-testid="select-service">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landscape-design">Landscape Design</SelectItem>
                      <SelectItem value="lawn-care">Lawn Care & Maintenance</SelectItem>
                      <SelectItem value="hardscaping">Hardscaping</SelectItem>
                      <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                      <SelectItem value="tree-care">Tree & Shrub Care</SelectItem>
                      <SelectItem value="seasonal-cleanup">Seasonal Cleanup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="projectDetails" className="text-sm font-medium text-foreground mb-2">
                    Project Details
                  </Label>
                  <Textarea
                    id="projectDetails"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    {...form.register("projectDetails")}
                    className="mt-2"
                    data-testid="textarea-projectDetails"
                  />
                </div>
                
                <div>
                  <Label htmlFor="budget" className="text-sm font-medium text-foreground mb-2">
                    Estimated Budget
                  </Label>
                  <Select onValueChange={(value) => form.setValue("budget", value)} data-testid="select-budget">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="over-50k">Over $50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Hours */}
            <Card className="bg-card shadow-lg border border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center" data-testid="business-hours-title">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between" data-testid="hours-weekdays">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="hours-saturday">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="hours-sunday">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="bg-card shadow-lg border border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@greenscapepro.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-address">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-muted-foreground">
                        123 Garden Way<br />
                        Springfield, ST 12345
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Services */}
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3 flex items-center" data-testid="emergency-title">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Emergency Services
                </h4>
                <p className="text-muted-foreground text-sm mb-3" data-testid="emergency-description">
                  24/7 emergency tree removal and storm damage cleanup available.
                </p>
                <div className="font-medium text-primary" data-testid="emergency-phone">
                  (555) 999-TREE
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
