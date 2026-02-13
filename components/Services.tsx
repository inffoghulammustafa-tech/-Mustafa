
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Free Istikhara',
    description: 'Seek divine guidance for your life choices, marriage, business, or travel with our expert Istikhara service.',
    icon: 'fa-solid fa-star-and-crescent',
    color: 'emerald'
  },
  {
    id: '2',
    title: 'Marriage Solutions',
    description: 'Resolve disputes, love marriage issues, and family misunderstandings through spiritual counseling.',
    icon: 'fa-solid fa-heart',
    color: 'pink'
  },
  {
    id: '3',
    title: 'Black Magic Removal',
    description: 'Complete protection and removal of Jaadu, Sifli Ilm, and Nazar-e-Bad through Quranic verses.',
    icon: 'fa-solid fa-shield-halved',
    color: 'indigo'
  },
  {
    id: '4',
    title: 'Business Success',
    description: 'Specialized Rohani solutions to overcome financial hurdles and bring Barakah into your business.',
    icon: 'fa-solid fa-chart-line',
    color: 'blue'
  },
  {
    id: '5',
    title: 'Health & Well-being',
    description: 'Spiritual healing (Dua & Wazaif) for mental peace, depression, and chronic physical ailments.',
    icon: 'fa-solid fa-leaf',
    color: 'green'
  },
  {
    id: '6',
    title: 'Personal Protection',
    description: 'Customized spiritual Taweez and Wazaif for safety from enemies and negative energies.',
    icon: 'fa-solid fa-lock',
    color: 'amber'
  }
];

const Services: React.FC = () => {
  const colorMap: Record<string, { border: string, iconBg: string, iconText: string, glow: string }> = {
    emerald: { 
      border: 'border-emerald-100/50', 
      iconBg: 'bg-emerald-100', 
      iconText: 'text-emerald-700',
      glow: 'shadow-emerald-500/10'
    },
    pink: { 
      border: 'border-pink-100/50', 
      iconBg: 'bg-pink-100', 
      iconText: 'text-pink-700',
      glow: 'shadow-pink-500/10'
    },
    indigo: { 
      border: 'border-indigo-100/50', 
      iconBg: 'bg-indigo-100', 
      iconText: 'text-indigo-700',
      glow: 'shadow-indigo-500/10'
    },
    blue: { 
      border: 'border-blue-100/50', 
      iconBg: 'bg-blue-100', 
      iconText: 'text-blue-700',
      glow: 'shadow-blue-500/10'
    },
    green: { 
      border: 'border-green-100/50', 
      iconBg: 'bg-green-100', 
      iconText: 'text-green-700',
      glow: 'shadow-green-500/10'
    },
    amber: { 
      border: 'border-amber-100/50', 
      iconBg: 'bg-amber-100', 
      iconText: 'text-amber-700',
      glow: 'shadow-amber-500/10'
    },
  };

  return (
    <section id="services" className="py-32 spiritual-radiance overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Premium Rohani Services</h3>
          <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/services">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`
                relative bg-glow-surface p-10 md:p-12 rounded-[3rem] border ${colorMap[service.color].border}
                transition-all duration-500 aura-glow group overflow-hidden
                group-hover/services:opacity-50 group-hover/services:blur-[2px] group-hover/services:scale-[0.98]
                hover:!opacity-100 hover:!blur-none hover:!scale-105 hover:-translate-y-4 hover:z-20 hover:border-emerald-400
              `}
            >
              {/* BIG Icon Fixed to Upper LEFT Corner */}
              <div className={`
                absolute top-6 left-6 w-24 h-24 rounded-3xl 
                flex items-center justify-center transition-all duration-700 
                group-hover:scale-125 group-hover:rotate-[-12deg]
                shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-500/20
                ${colorMap[service.color].iconBg} ${colorMap[service.color].iconText}
              `}>
                <i className={`${service.icon} text-5xl transition-transform duration-700`}></i>
              </div>

              {/* Increased top padding to accommodate the larger icon */}
              <div className="relative z-10 pt-32">
                <h4 className="text-3xl font-black text-[#0B1B32] mb-6 transition-colors group-hover:text-emerald-900">
                  {service.title}
                </h4>
                <p className="text-gray-500 leading-relaxed mb-10 text-lg group-hover:text-gray-600">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/923000000000" 
                    className="inline-flex items-center gap-3 text-emerald-800 font-bold text-xs uppercase tracking-widest group/link"
                  >
                    <span>EXPLORE MORE</span>
                    <span className="w-12 h-[2px] bg-emerald-700 transition-all duration-300 group-hover/link:w-20"></span>
                    <i className="fa-solid fa-arrow-right text-lg transition-transform duration-300 group-hover/link:translate-x-1"></i>
                  </a>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className={`
                absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0
                group-hover:opacity-40 transition-opacity duration-700
                ${service.color === 'emerald' ? 'bg-emerald-400' : ''}
                ${service.color === 'pink' ? 'bg-pink-400' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-400' : ''}
                ${service.color === 'blue' ? 'bg-blue-400' : ''}
                ${service.color === 'green' ? 'bg-green-400' : ''}
                ${service.color === 'amber' ? 'bg-amber-400' : ''}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
