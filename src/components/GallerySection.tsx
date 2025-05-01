
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

// Placeholder images would be replaced with actual Labor Day celebration images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/photo-1605810230434-7631ac76ec81",
    alt: "Labor Day celebration in Nairobi",
    aspectRatio: "landscape"
  },
  {
    id: 2,
    src: "/photo-1519389950473-47ba0277781c",
    alt: "Workers celebration in Kenya",
    aspectRatio: "landscape"
  },
  {
    id: 3,
    src: "/photo-1581091226825-a6a2a5aee158",
    alt: "Kenya Labor Day parade",
    aspectRatio: "portrait"
  },
  {
    id: 4,
    src: "/photo-1605810230434-7631ac76ec81",
    alt: "Labor union members at celebration",
    aspectRatio: "square"
  },
  {
    id: 5,
    src: "/photo-1519389950473-47ba0277781c",
    alt: "Community event for Labor Day",
    aspectRatio: "landscape"
  },
  {
    id: 6,
    src: "/photo-1581091226825-a6a2a5aee158",
    alt: "Cultural performance at Labor Day event",
    aspectRatio: "square"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Celebration Gallery</h2>
        <div className="h-1 w-24 bg-kenya-black mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity
                ${image.aspectRatio === "square" ? "aspect-square" : 
                  image.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}
              `}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
