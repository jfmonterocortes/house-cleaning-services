import React from 'react';

const TrustPoint = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-md">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TrustPoint;