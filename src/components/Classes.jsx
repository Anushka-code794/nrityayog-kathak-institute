import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Classes() {
  const classLevels = [
    {
      title: "Beginner's Journey",
      level: "Beginner",
      duration: "45 minutes",
      price: "$25",
      features: [
        "Basic hand gestures (Mudras)",
        "Simple footwork patterns",
        "Introduction to rhythm",
        "Cultural context and history"
      ],
      schedule: "Tuesdays & Thursdays 6:00 PM"
    },
    {
      title: "Intermediate Expressions",
      level: "Intermediate",
      duration: "60 minutes", 
      price: "$35",
      features: [
        "Complex choreography",
        "Storytelling through dance",
        "Advanced spins (Chakkars)",
        "Performance preparation"
      ],
      schedule: "Mondays & Wednesdays 7:00 PM"
    },
    {
      title: "Advanced Artistry",
      level: "Advanced",
      duration: "75 minutes",
      price: "$45",
      features: [
        "Master-level techniques",
        "Improvisation skills",
        "Classical compositions",
        "Competition preparation"
      ],
      schedule: "Saturdays 10:00 AM"
    }
  ];

  const getBadgeVariant = (level) => {
    switch (level) {
      case "Beginner":
        return "secondary";
      case "Intermediate":
        return "default";
      case "Advanced":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dance <span className="text-primary">Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your perfect path in Kathak, whether you're taking your first steps 
            or refining your artistry. Each class is designed to nurture your growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {classLevels.map((classItem, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
              
              <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <Badge variant={getBadgeVariant(classItem.level)} className="text-sm">
                    {classItem.level}
                  </Badge>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{classItem.duration}</span>
                </div>
                
                <CardTitle className="text-2xl mb-2">{classItem.title}</CardTitle>
                
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">{classItem.price}</span>
                  <span className="text-muted-foreground">/class</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {classItem.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Schedule:</strong> {classItem.schedule}
                  </p>
                  
                  <Button 
                    variant="cultural" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Join This Class
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Not sure which level is right for you? Book a free consultation!
          </p>
          <Button variant="hero" size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}