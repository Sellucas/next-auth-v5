import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full hero w-full bg-[#1e40af]">
      <div className="flex h-full flex-col items-center justify-center radial absolute w-full z-10">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              "text-6xl font-semi-bold text-white drop-shadow-md",
              font.className
            )}
          >
            🔑 Auth
          </h1>
          <p className="text-white text-lg">An uncomplicated authentication service</p>
          <div>
            <LoginButton asChild>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </main>
  );
}
