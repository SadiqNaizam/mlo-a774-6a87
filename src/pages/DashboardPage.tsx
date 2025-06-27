import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd also clear the user's session/token here
    navigate('/'); // Navigate to the LoginPage route
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header isAuthenticated={true} />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="items-center text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
            <CardTitle className="text-2xl">Welcome to Your Dashboard</CardTitle>
            <CardDescription>
              You have successfully logged in to the SecureLogin Portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              This is your protected area. From here, you would typically access the main features of the application.
            </p>
            <Button onClick={handleLogout} className="w-full sm:w-auto">
              Log Out
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;