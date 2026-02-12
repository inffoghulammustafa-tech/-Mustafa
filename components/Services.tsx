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
      border: 'border-emerald-100', 
      iconBg: 'bg-emerald-100', 
      iconText: 'text-emerald-700',
      glow: 'shadow-emerald-500/10'
    },
    pink: { 
      border: 'border-pink-100', 
      iconBg: 'bg-pink-100', 
      iconText: 'text-pink-700',
      glow: 'shadow-pink-500/10'
    },
    indigo: { 
      border: 'border-indigo-100', 
      iconBg: 'bg-indigo-100', 
      iconText: 'text-indigo-700',
      glow: 'shadow-indigo-500/10'
    },
    blue: { 
      border: 'border-blue-100', 
      iconBg: 'bg-blue-100', 
      iconText: 'text-blue-700',
      glow: 'shadow-blue-500/10'
    },
    green: { 
      border: 'border-green-100', 
      iconBg: 'bg-green-100', 
      iconText: 'text-green-700',
      glow: 'shadow-green-500/10'
    },
    amber: { 
      border: 'border-amber-100', 
      iconBg: 'bg-amber-100', 
      iconText: 'text-amber-700',
      glow: 'shadow-amber-500/10'
    },
  };

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Premium Rohani Services</h3>
          <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`
                relative bg-white p-10 md:p-12 rounded-[2.5rem] border ${colorMap[service.color].border}
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group
                shadow-xl shadow-gray-100 overflow-hidden
              `}
            >
              {/* Icon Circle Badge - Enhanced scale on hover */}
              <div className={`
                absolute top-8 right-8 w-14 h-14 rounded-full 
                flex items-center justify-center transition-all duration-500 
                group-hover:scale-[1.8] group-hover:rotate-12 group-hover:-translate-x-4 group-hover:translate-y-4
                shadow-sm group-hover:shadow-xl
                ${colorMap[service.color].iconBg} ${colorMap[service.color].iconText}
              `}>
                <i className={`${service.icon} text-2xl transition-transform duration-500 group-hover:scale-110`}></i>
              </div>

              <div className="relative z-10 pt-4">
                <h4 className="text-2xl font-bold text-[#0B1B32] mb-6 pr-12 transition-colors group-hover:text-emerald-900">
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

              {/* Decorative subtle background gradient */}
              <div className={`
                absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[60px] opacity-0
                group-hover:opacity-30 transition-opacity duration-700
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