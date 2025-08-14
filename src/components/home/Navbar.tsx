
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeSisters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Our Mission
            </Link>
            <Link to="/showcase" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
              <Users className="h-4 w-4" />
              Sister Spotlight
            </Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Community
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all">
                Join Sisterhood
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Mission
              </Link>
              <Link 
                to="/showcase" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                Sister Spotlight
              </Link>
              <Link 
                to="/leaderboard" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary justify-start">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-primary to-accent justify-start">
                  Join Sisterhood
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
