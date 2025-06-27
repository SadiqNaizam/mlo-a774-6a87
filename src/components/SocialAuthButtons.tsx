import * as React from "react"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

// A simple, self-contained SVG for the Google icon as lucide-react doesn't include brand icons.
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.62-4.55 1.62-3.87 0-7-3.13-7-7s3.13-7 7-7c2.04 0 3.92.82 5.24 2.1l2.52-2.52C18.05 1.82 15.36 0 12.48 0 5.88 0 .04 5.88.04 12.92s5.84 12.92 12.44 12.92c3.28 0 5.92-1.1 7.84-3.08 2.04-1.96 2.6-4.96 2.6-7.66 0-.82-.08-1.54-.2-2.28H12.48z" />
  </svg>
)

export function SocialAuthButtons() {
  console.log("SocialAuthButtons loaded");

  const onGoogleClick = () => {
    // Placeholder for Google login logic
    console.log("Google login button clicked");
  };

  const onGitHubClick = () => {
    // Placeholder for GitHub login logic
    console.log("GitHub login button clicked");
  };

  return (
    <div className="w-full">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" type="button" onClick={onGitHubClick}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" type="button" onClick={onGoogleClick}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  )
}

export default SocialAuthButtons;