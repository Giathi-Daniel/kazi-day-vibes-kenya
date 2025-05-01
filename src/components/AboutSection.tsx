
import { Calendar, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-kenya-black">About Labor Day in Kenya</h2>
          <div className="h-1 w-24 bg-kenya-red mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-8">
            Labor Day in Kenya is celebrated on May 1st each year, honoring the contributions and achievements 
            of workers across the nation. This international day celebrates the labor movement and recognizes 
            the economic and social achievements of workers throughout Kenya's history.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="border-l-4 border-l-kenya-red hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="h-10 w-10 text-kenya-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">Historical Significance</h3>
                <p className="text-gray-600">
                  Labor Day has been observed in Kenya since the struggle for independence, 
                  recognizing workers' rights and their fight for better working conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-kenya-green hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-kenya-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">National Holiday</h3>
                <p className="text-gray-600">
                  As an official public holiday, Labor Day brings Kenyans together in celebration 
                  with speeches, parades and community events across the country.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-kenya-black hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="h-10 w-10 text-kenya-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cultural Celebration</h3>
                <p className="text-gray-600">
                  The day features vibrant celebrations showcasing Kenya's diverse culture through music, 
                  dance, and traditional ceremonies honoring workers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
