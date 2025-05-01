
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element on component mount
    audioRef.current = new Audio("/audio/kenya.mp3");
    
    // Cleanup function to pause and release audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setIsPlaying(true);
    }
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
            {isPlaying ? (
              <Pause className="mr-2 h-4 w-4" />
            ) : (
              <Play className="mr-2 h-4 w-4" />
            )}
            {isPlaying ? "Pause Music" : "Play Music"}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
