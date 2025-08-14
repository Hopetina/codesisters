
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CTASection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 text-center">
        <div data-aos="zoom-in" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Ready to Join the Sisterhood?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect with amazing women in tech, access exclusive resources, and grow your career in a supportive community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => navigate("/register")}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-xl text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:scale-105"
            >
              Join CodeSisters <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly coding tips and sisterhood updates
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
