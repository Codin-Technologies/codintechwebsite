'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface SolutionItem {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
}

export default function SolutionCard({ item }: { item: SolutionItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-600 relative overflow-hidden group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <span className="text-2xl text-indigo-600 transform transition-transform duration-300 group-hover:translate-x-1">
          {isExpanded ? '↓' : '→'}
        </span>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t-2 border-gray-100 animate-in fade-in slide-in-from-top-2">
          <p className="text-gray-700 leading-relaxed mb-6">
            {item.fullDescription}
          </p>
          
          <ul className="space-y-3 mb-6">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button
              href={`/solutions/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              Explore Solutions
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="flex-1"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
