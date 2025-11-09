
import React from 'react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "ApexRo unleashed my potential. I'm now dominating games I struggled with before, thanks to their advanced tools. Truly game-changing!",
    author: "Shadow_Mage",
    role: "Elite Player",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: 2,
    quote: "The undetected bypasses are flawless. I've experienced zero interruptions, allowing me to focus purely on outsmarting the competition.",
    author: "Code_Ninja",
    role: "Developer",
    avatarUrl: "https://i.pravatar.cc/150?img=69",
  },
  {
    id: 3,
    quote: "Finally, a platform that understands what true control means. ApexRo's script hub is a treasure trove of power.",
    author: "Phantom_Exec",
    role: "Strategic Gamer",
    avatarUrl: "https://i.pravatar.cc/150?img=70",
  },
  {
    id: 4,
    quote: "Their commitment to anonymity is top-tier. I feel secure and confident operating with ApexRo's solutions.",
    author: "StealthOps",
    role: "Privacy Advocate",
    avatarUrl: "https://i.pravatar.cc/150?img=71",
  },
  {
    id: 5,
    quote: "Dynamic game logic has opened up so many new possibilities. It's like having a backdoor to every Roblox experience.",
    author: "CircuitBreaker",
    role: "Game Modder",
    avatarUrl: "https://i.pravatar.cc/150?img=72",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-900 text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">Voices from the Underground</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-950 rounded-lg shadow-xl p-6 transform hover:scale-102 transition-transform duration-300 ease-in-out border border-gray-700 hover:border-cyan-500">
              <p className="italic text-lg text-gray-200 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                {testimonial.avatarUrl && (
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cyan-500"
                  />
                )}
                <div>
                  <p className="text-cyan-300 font-semibold">{testimonial.author}</p>
                  {testimonial.role && <p className="text-gray-400 text-sm">{testimonial.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
