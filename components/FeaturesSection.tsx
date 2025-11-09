import React from 'react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Elite Script Hub',
    description: 'Access a curated arsenal of powerful scripts and robust executors to unlock advanced game functionalities and achieve superior control.',
    imageUrl: 'https://picsum.photos/400/250?random=1&grayscale&blur=2',
  },
  {
    id: 2,
    title: 'Undetected Bypass',
    description: 'Navigate the digital battlefield with our cutting-edge anti-cheat bypasses, ensuring uninterrupted access and stealth operations.',
    imageUrl: 'https://picsum.photos/400/250?random=2&grayscale&blur=2',
  },
  {
    id: 3,
    title: 'Dynamic Game Logic',
    description: 'Manipulate and inject custom game logic, crafting unique experiences and dominating every virtual environment.',
    imageUrl: 'https://picsum.photos/400/250?random=3&grayscale&blur=2',
  },
  {
    id: 4,
    title: 'Fortified Anonymity',
    description: 'Our tools are engineered for maximum security and stealth, safeguarding your identity and operations against detection.',
    imageUrl: 'https://picsum.photos/400/250?random=4&grayscale&blur=2',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 bg-black text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">Our Advanced Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-cyan-500">
              <img src={feature.imageUrl} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-300">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;