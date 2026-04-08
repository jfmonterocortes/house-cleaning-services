import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialCard = ({ rating, quote, name, role }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'fill-primary text-primary' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
          "{quote}"
        </blockquote>
        <div className="mt-auto">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;