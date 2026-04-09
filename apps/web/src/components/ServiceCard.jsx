import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, description, image }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group rounded-2xl bg-card">
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width="600"
            height="256"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      )}

      <CardHeader className="relative z-10 pt-6">
        {!image && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow pb-8">
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;