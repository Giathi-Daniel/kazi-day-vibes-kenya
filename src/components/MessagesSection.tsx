
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Francis Atwoli",
    role: "Secretary-General, COTU",
    message: "On this Labor Day, we celebrate the hard-working Kenyans who continue to build our nation. Your dedication, resilience and determination are the foundation of our country's progress.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dr. Rebecca Miano",
    role: "Cabinet Secretary, Ministry of Labor",
    message: "Today we honor the extraordinary contributions of Kenya's workforce. The government remains committed to improving working conditions and creating more opportunities for all Kenyans.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Wilfred Marube",
    role: "Federation of Kenya Employers",
    message: "Employers across Kenya recognize the vital partnership between businesses and workers. Together, we can build a more prosperous Kenya with decent work and economic growth for all.",
    image: "/placeholder.svg"
  }
];

const MessagesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Messages from Leaders</h2>
        <div className="h-1 w-24 bg-kenya-red mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((message) => (
            <Card key={message.id} className="border-t-4 border-t-kenya-green hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-kenya-green mb-3">
                    <AvatarImage src={message.image} alt={message.name} />
                    <AvatarFallback>{message.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-center">{message.name}</h3>
                  <p className="text-sm text-gray-500">{message.role}</p>
                </div>
                <blockquote className="text-gray-700 italic text-center">
                  "{message.message}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
