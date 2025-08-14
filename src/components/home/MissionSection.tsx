import { Users, BookOpen, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionSection = () => {
  const features = [
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with like-minded women who understand your journey and celebrate your wins."
    },
    {
      icon: BookOpen,
      title: "Learn Together",
      description: "Access coding resources, tutorials, and mentorship from experienced sisters in tech."
    },
    {
      icon: Award,
      title: "Grow Your Career",
      description: "Get career guidance, interview prep, and opportunities exclusively for our community."
    },
    {
      icon: Heart,
      title: "Sisterhood First",
      description: "Experience a judgment-free space where collaboration beats competition every time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text" 
            data-aos="fade-up"
          >
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We believe that when women support women, incredible things happen. CodeSisters is more than a community—
            it's a movement to create lasting change in the tech industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group"
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;