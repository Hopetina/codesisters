
import { Heart, ArrowRight, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  onShowAgreement: () => void;
}

const HeroSection = ({ onShowAgreement }: HeroSectionProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Generate floating elements for visual appeal
  const floatingElements = [...Array(isMobile ? 6 : 10)].map((_, i) => (
    <div 
      key={i} 
      className="absolute animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 4 + 3}s`,
        animationDelay: `${Math.random() * 2}s`,
        opacity: 0.6,
      }}
    >
      {i % 2 === 0 ? (
        <Heart className="text-primary h-4 w-4 sm:h-6 sm:w-6" />
      ) : (
        <Code className="text-accent h-4 w-4 sm:h-6 sm:w-6" />
      )}
    </div>
  ));

  return (
    <section 
      className="pt-20 md:pt-32 pb-16 md:pb-20 px-4 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--pink-primary) / 0.9), hsl(var(--blue-primary) / 0.9)), url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') no-repeat center center",
        backgroundSize: "cover"
      }}
    >
      {/* Floating elements */}
      {floatingElements}
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Users className="mr-2 h-5 w-5 text-white" />
            <span className="text-sm md:text-base text-white font-medium">Join the Sisterhood</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Code Together, <span className="text-pink-200">Rise Together</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-8 md:mb-10 leading-relaxed">
            CodeSisters is where women in tech find their tribe. Learn, grow, and succeed in a supportive community built by women, for women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/register")}
              size="lg"
              className="bg-white text-primary hover:bg-pink-50 px-8 py-6 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 group text-lg font-semibold"
            >
              Join the Sisterhood <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={onShowAgreement}
              size="lg"
              className="border-2 border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 rounded-full transition-all shadow-lg backdrop-blur-sm text-lg font-semibold"
            >
              Our Mission
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
