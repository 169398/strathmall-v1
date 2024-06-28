import { Button } from "@/src/components/ui/button";
import AuthenticatePage from "./authenticate/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <AuthenticatePage/>

      
      <Button><h1>Hello world</h1></Button>
    
    </main>
  );
}
