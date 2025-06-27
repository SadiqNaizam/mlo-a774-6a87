import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {currentYear} SecureLogin Portal. All rights reserved.
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;