import React from 'react';

// Define the props interface for type safety
interface PasswordStrengthIndicatorProps {
  password?: string;
}

// Helper function to evaluate password strength
const calculateStrength = (password: string) => {
  let score = 0;
  if (!password) {
    return { score: 0, label: "" };
  }

  // Define criteria for a strong password
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  // Award points based on criteria met
  if (password.length >= 8) score++;
  if (hasNumber) score++;
  if (hasUpperCase && hasLowerCase) score++;
  if (hasSpecialChar) score++;
  
  // A very long password gets a bonus point
  if (password.length >= 12) score++;

  // Cap score at 4 for our 4 bars
  score = Math.min(score, 4);

  // Return score and corresponding label
  switch (score) {
    case 0:
    case 1:
      return { score: 1, label: 'Weak' };
    case 2:
      return { score: 2, label: 'Medium' };
    case 3:
      return { score: 3, label: 'Good' };
    case 4:
      return { score: 4, label: 'Strong' };
    default:
      return { score: 0, label: '' };
  }
};

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const strength = calculateStrength(password);
  const barCount = 4;
  
  // Define colors for each strength level
  const strengthColors: { [key: number]: string } = {
    1: 'bg-red-500',    // Weak
    2: 'bg-yellow-500', // Medium
    3: 'bg-blue-500',   // Good
    4: 'bg-green-500',  // Strong
  };
  
  // Determine the color of the bars based on the score
  const getBarColor = (index: number) => {
    // If the password is empty or this bar is beyond the current score, it's gray
    if (strength.score === 0 || index >= strength.score) {
      return 'bg-gray-200 dark:bg-gray-700';
    }
    // Otherwise, color all active bars with the color corresponding to the current strength level
    return strengthColors[strength.score];
  };

  return (
    <div className="w-full space-y-1.5" aria-live="polite">
      <div className="flex w-full gap-2">
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${getBarColor(i)}`}
            data-testid={`strength-bar-${i}`}
          />
        ))}
      </div>
      {password.length > 0 && strength.label && (
        <p className="text-xs text-muted-foreground">
          Password strength: <span className="font-semibold">{strength.label}</span>
        </p>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;