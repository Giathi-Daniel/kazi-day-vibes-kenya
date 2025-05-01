
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);
  
  const togglePlayback = () => {
    if (!audioRef[0]) {
      const audio = new Audio("/kenya.mp3");
      audioRef[0] = audio;
    }
    
    if (isPlaying) {
      audioRef[0].pause();
    } else {
      audioRef[0].play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <header className="bg-gradient-to-b from-kenya-black to-kenya-black/90 text-kenya-white py-4 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full bg-kenya-red flex items-center justify-center mr-3">
            <span className="text-kenya-white font-bold text-xl">KE</span>
          </div>
          <h1 className="text-2xl font-bold">Kazi Day Kenya</h1>
        </div>
        
        <nav className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-kenya-white hover:text-kenya-red transition-colors" 
            onClick={togglePlayback}
          >
            <Music className="mr-2 h-4 w-4" />
            {isPlaying ? "Pause Music" : "Play Music"}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
