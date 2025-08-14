import { Code2, GitBranch, Laptop, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LearnSection = () => {
  const learningPaths = [
    {
      icon: Code2,
      title: "Frontend Fundamentals",
      description: "Master HTML, CSS, JavaScript, and React with hands-on projects and sister support.",
      level: "Beginner to Intermediate",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: GitBranch,
      title: "Backend & Databases",
      description: "Learn Node.js, Python, databases, and APIs through collaborative coding sessions.",
      level: "Intermediate",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Laptop,
      title: "Full Stack Mastery",
      description: "Combine frontend and backend skills to build complete applications with mentorship.",
      level: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Career Transition",
      description: "Special program for women switching careers with resume help and interview prep.",
      level: "All Levels",
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text" 
            data-aos="fade-up"
          >
            Learn to Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Choose your learning path and grow with personalized mentorship from experienced sisters in tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {learningPaths.map((path, index) => (
            <Card 
              key={index} 
              className="border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group h-full"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">{path.title}</CardTitle>
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                  {path.level}
                </span>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {path.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all hover:scale-105"
          >
            View All Learning Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;