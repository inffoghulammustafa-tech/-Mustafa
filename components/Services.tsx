
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
  // Mapping color to permanent ambient glow and hover intensities
  const glowMap: Record<string, string> = {
    emerald: 'shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_0px_rgba(16,185,129,0.5)] border-emerald-100 bg-emerald-50/5',
    pink: 'shadow-[0_0_30px_-10px_rgba(244,114,182,0.3)] hover:shadow-[0_0_50px_0px_rgba(244,114,182,0.5)] border-pink-100 bg-pink-50/5',
    indigo: 'shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_0px_rgba(99,102,241,0.5)] border-indigo-100 bg-indigo-50/5',
    blue: 'shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_0px_rgba(59,130,246,0.5)] border-blue-100 bg-blue-50/5',
    green: 'shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_0px_rgba(34,197,94,0.5)] border-green-100 bg-green-50/5',
    amber: 'shadow-[0_0_30_px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_0px_rgba(245,158,11,0.5)] border-amber-100 bg-amber-50/5',
  };

  const iconBgMap: Record<string, string> = {
    emerald: 'text-emerald-600 bg-emerald-100/80',
    pink: 'text-pink-600 bg-pink-100/80',
    indigo: 'text-indigo-600 bg-indigo-100/80',
    blue: 'text-blue-600 bg-blue-100/80',
    green: 'text-green-600 bg-green-100/80',
    amber: 'text-amber-600 bg-amber-100/80',
  };

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4 animate-pulse">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Premium Rohani Services</h3>
          <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
        </div>

        {/* 'group/grid' triggers dimming of non-hovered items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 group/grid">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`
                relative p-12 rounded-[3.5rem] border transition-all duration-700 ease-out cursor-default 
                group/card overflow-visible
                ${glowMap[service.color]}
                hover:scale-[1.08] hover:z-20 hover:border-transparent
                group-hover/grid:opacity-25 group-hover/grid:blur-[3px] group-hover/grid:scale-[0.95]
                hover:!opacity-100 hover:!blur-none hover:!scale-[1.08]
              `}
            >
              {/* Permanent Glow Background Layer */}
              <div className={`absolute inset-0 rounded-[3.5rem] opacity-20 blur-2xl transition-opacity duration-700 group-hover/card:opacity-40 -z-10
                ${service.color === 'emerald' ? 'bg-emerald-400' : ''}
                ${service.color === 'pink' ? 'bg-pink-400' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-400' : ''}
                ${service.color === 'blue' ? 'bg-blue-400' : ''}
                ${service.color === 'green' ? 'bg-green-400' : ''}
                ${service.color === 'amber' ? 'bg-amber-400' : ''}
              `}></div>

              {/* Icon Repositioned to Top-Right with Massive Scaling */}
              <div className={`
                absolute -top-6 -right-6 w-20 h-20 rounded-[2rem] 
                flex items-center justify-center shadow-xl backdrop-blur-sm
                transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${iconBgMap[service.color]}
                group-hover/card:scale-[2.8] group-hover/card:-translate-x-12 group-hover/card:translate-y-12
                group-hover/card:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
                z-30
              `}>
                <i className={`${service.icon} text-3xl transition-all duration-700 group-hover/card:rotate-[360deg]`}></i>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-black text-slate-900 mb-6 pr-8 transition-colors duration-500 group-hover/card:text-emerald-700">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-10 text-lg group-hover/card:text-slate-800 transition-colors">
                  {service.description}
                </p>
                
                <div className="pt-4">
                  <a 
                    href="https://wa.me/923000000000" 
                    className="inline-flex items-center gap-4 text-emerald-800 font-black text-xs uppercase tracking-[0.2em] group/link"
                  >
                    <span className="relative overflow-hidden flex items-center gap-4">
                      Explore More
                      <span className="h-px w-10 bg-emerald-800 transition-all duration-500 group-hover/card:w-20"></span>
                    </span>
                    <i className="fa-solid fa-arrow-right-long text-lg group-hover/link:translate-x-2 transition-transform"></i>
                  </a>
                </div>
              </div>

              {/* Internal Radiant Glow Circle */}
              <div className={`
                absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[60px] opacity-0
                group-hover/card:opacity-30 transition-opacity duration-1000
                ${service.color === 'emerald' ? 'bg-emerald-300' : ''}
                ${service.color === 'pink' ? 'bg-pink-300' : ''}
                ${service.color === 'indigo' ? 'bg-indigo-300' : ''}
                ${service.color === 'blue' ? 'bg-blue-300' : ''}
                ${service.color === 'green' ? 'bg-green-300' : ''}
                ${service.color === 'amber' ? 'bg-amber-300' : ''}
              `}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
