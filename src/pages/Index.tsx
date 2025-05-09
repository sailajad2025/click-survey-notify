
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to Click-Survey-Notify</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The all-in-one platform for tracking user clicks, creating interactive surveys,
          and sending smart notifications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/features">Explore Features</Link>
          </Button>
          <Button variant="outline" size="lg">
            Sign Up Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
