
import { Heart, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-primary/20 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                CodeSisters
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering women in tech through community, mentorship, and sisterhood. 
              Together we code, together we rise.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Learn to Code</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Get Involved</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 md:mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} CodeSisters. Made with 💖 by women in tech.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
