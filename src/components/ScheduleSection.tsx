
import { Badge } from "@/components/ui/badge";

interface Event {
  time: string;
  title: string;
  description: string;
  location: string;
  category: "speech" | "performance" | "activity";
}

const events: Event[] = [
  {
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Official opening of the Labor Day celebrations with the national anthem and flag raising",
    location: "Uhuru Park, Nairobi",
    category: "speech"
  },
  {
    time: "10:30 AM",
    title: "Presidential Address",
    description: "Address by the President of Kenya on the state of labor and employment in the country",
    location: "Main Stage",
    category: "speech"
  },
  {
    time: "12:00 PM",
    title: "Traditional Dance Performance",
    description: "Cultural performances showcasing Kenya's diverse heritage and traditions",
    location: "Cultural Stage",
    category: "performance"
  },
  {
    time: "1:30 PM",
    title: "Labor Awards Ceremony",
    description: "Recognition of outstanding contributions to Kenya's workforce development",
    location: "Main Stage",
    category: "activity"
  },
  {
    time: "3:00 PM",
    title: "Musical Performance",
    description: "Live entertainment featuring top Kenyan artists celebrating workers through music",
    location: "Concert Area",
    category: "performance"
  },
  {
    time: "5:30 PM",
    title: "Closing Remarks",
    description: "Concluding the day's celebrations with a message of unity and continued progress",
    location: "Main Stage",
    category: "speech"
  }
];

const ScheduleSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Event Schedule</h2>
        <div className="h-1 w-24 bg-kenya-green mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={index}
              className="mb-8 bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-kenya-red hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-kenya-black">{event.title}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-gray-600 font-medium">{event.time}</span>
                    <Badge 
                      className={`ml-3 ${
                        event.category === "speech" 
                          ? "bg-kenya-red" 
                          : event.category === "performance" 
                            ? "bg-kenya-green" 
                            : "bg-kenya-black"
                      }`}
                    >
                      {event.category}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{event.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
