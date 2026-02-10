
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Free Istikhara',
    description: 'Seek divine guidance for your life choices, marriage, business, or travel with our expert Istikhara service.',
    icon: 'fa-solid fa-star-and-crescent',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: '2',
    title: 'Marriage Solutions',
    description: 'Resolve disputes, love marriage issues, and family misunderstandings through spiritual counseling.',
    icon: 'fa-solid fa-heart',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    id: '3',
    title: 'Black Magic Removal',
    description: 'Complete protection and removal of Jaadu, Sifli Ilm, and Nazar-e-Bad through Quranic verses.',
    icon: 'fa-solid fa-shield-halved',
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: '4',
    title: 'Business Success',
    description: 'Specialized Rohani solutions to overcome financial hurdles and bring Barakah into your business.',
    icon: 'fa-solid fa-chart-line',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: '5',
    title: 'Health & Well-being',
    description: 'Spiritual healing (Dua & Wazaif) for mental peace, depression, and chronic physical ailments.',
    icon: 'fa-solid fa-leaf',
    color: 'bg-green-100 text-green-700'
  },
  {
    id: '6',
    title: 'Personal Protection',
    description: 'Customized spiritual Taweez and Wazaif for safety from enemies and negative energies.',
    icon: 'fa-solid fa-lock',
    color: 'bg-amber-100 text-amber-700'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dedicated Spiritual Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of spiritual healing services tailored to help you overcome life's most difficult challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-emerald-50/50 hover:border-emerald-100 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="https://wa.me/923000000000" className="flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all">
                Learn More <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
