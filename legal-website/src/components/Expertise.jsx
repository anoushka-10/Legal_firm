import { useState } from "react";
import {
  Briefcase,
  Scale,
  Award,
  BookOpen,
  Globe,
  Users,
  Gavel,
  Banknote,
  Building2,
  ShieldCheck,
  ClipboardList,
  RotateCcw,
  UserCog,
  HeartHandshake,
  Stamp,
  Landmark,
  BadgeDollarSign
} from "lucide-react";

const Expertise = () => {
  const [showAll, setShowAll] = useState(false);

  const expertiseAreas = [
    {
      title: "Arbitration & Litigation",
      icon: <Gavel size={24} />,
      description: "Dispute resolution across sectors like Oil & Gas, Power, Real Estate, Banking, IP, and IT."
    },
    {
      title: "Banking, Finance & Insurance",
      icon: <Banknote size={24} />,
      description: "Advice on securitization, insolvency, fraud, loan documentation, and insurance matters."
    },
    {
      title: "Corporate & Commercial Law",
      icon: <Briefcase size={24} />,
      description: "Support for M&A, amalgamations, drafting contracts, and handling IBC matters."
    },
    {
      title: "Criminal Law",
      icon: <Scale size={24} />,
      description: "Representation in financial frauds, bail matters, domestic violence, and trial appeals."
    },
    {
      title: "Due Diligence",
      icon: <ClipboardList size={24} />,
      description: "Legal diligence for company and property acquisitions across applicable laws."
    },
    {
      title: "Recovery & Enforcement",
      icon: <RotateCcw size={24} />,
      description: "End-to-end loan recovery under SARFAESI through legal and field interventions."
    },
    {
      title: "Employment & Labour Laws",
      icon: <UserCog size={24} />,
      description: "Advisory on contracts, disputes, PF, gratuity, bonus, and employee rights."
    },
    {
      title: "Family Law",
      icon: <HeartHandshake size={24} />,
      description: "Handling of divorce, custody, maintenance, and adoption with empathy and clarity."
    },
    {
      title: "Intellectual Property",
      icon: <Award size={24} />,
      description: "Trademarks, copyrights, and design services including registration and litigation."
    },
    {
      title: "Real Estate & RERA",
      icon: <Building2 size={24} />,
      description: "Legal support for RERA litigations, property compliance, and feasibility assessments."
    },
    {
      title: "Taxation",
      icon: <BadgeDollarSign size={24} />,
      description: "Direct and indirect tax support from seasoned legal professionals."
    },
    {
      title: "Energy Law",
      icon: <Landmark size={24} />,
      description: "Project legal support for renewables: licensing, land due diligence, and execution."
    },
    {
      title: "Licenses & Permits",
      icon: <Stamp size={24} />,
      description: "Assistance with government licenses for cloud kitchens, IT, pharma, and manufacturing."
    },
    {
      title: "International Law",
      icon: <Globe size={24} />,
      description: "Cross-border business advisory, foreign investment, and international compliance."
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container px-4 mx-auto">
        {/* Section Title with animations */}
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300 hover:text-gray-900">
            Areas of Expertise
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 origin-center bg-yellow-600 animate-scaleX"></div>
          <p className="max-w-xl mx-auto mt-4 text-gray-600 transition-all duration-500 hover:text-gray-800">
            We provide specialized legal counsel across a broad spectrum of practice areas.
          </p>
        </div>

        {/* Expertise Cards with staggered animations */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas
            .slice(0, showAll ? expertiseAreas.length : 6)
            .map((area, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-start 
                  border-l-4 border-yellow-500 hover:border-yellow-600 hover:-translate-y-1
                  animate-fadeInUp delay-${Math.min(index, 5) * 100}`}
              >
                <div className="mb-3 text-yellow-600 transition-transform duration-300 hover:scale-110">
                  {area.icon}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-yellow-700">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
                  {area.description}
                </p>
              </div>
            ))}
        </div>

        {/* Show More/Less Button with animation */}
        <div className="text-center delay-700 animate-fadeIn">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-6 py-3 text-white transition-all duration-300 bg-yellow-600 rounded-md shadow-md hover:bg-yellow-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            {showAll ? "Show Less" : "Show More Practice Areas"}
          </button>
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleX {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes fadeInUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-scaleX {
            animation: scaleX 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .delay-0 {
            animation-delay: 0ms;
          }
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
          .delay-400 {
            animation-delay: 400ms;
          }
          .delay-500 {
            animation-delay: 500ms;
          }
          .delay-600 {
            animation-delay: 600ms;
          }
          .delay-700 {
            animation-delay: 700ms;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Expertise;