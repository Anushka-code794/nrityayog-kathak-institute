import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your Kathak journey at Nrityayog Kathak Institute? 
            Contact us today to book your trial class and start learning under the guidance of Anupama Bhadri Kothiyal.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Studio Location</h3>
                    <p className="text-muted-foreground">
                      Shastri Nagar<br />
                      Haridwar Road<br />
                      Dehradun
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/6dKMfXyGt2j1THzG6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">9808487238</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-dark to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">vidyarthianupama@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Studio Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 4:00 PM - 9:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input name="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input name="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input name="phone" type="tel" placeholder="9808487238" required />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Experience Level
                  </label>
                  <select name="experience" className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" required>
                    <option value="">Select your experience</option>
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Dance Experience</option>
                    <option value="intermediate">Intermediate Dancer</option>
                    <option value="advanced">Advanced Dancer</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your interest in Kathak, any questions you have, or how we can help you..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}