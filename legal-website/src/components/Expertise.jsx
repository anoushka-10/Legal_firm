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
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Areas of Expertise</h2>
          <div className="w-16 h-1 bg-yellow-600 mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We provide specialized legal counsel across a broad spectrum of practice areas.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertiseAreas
            .slice(0, showAll ? expertiseAreas.length : 6)
            .map((area, index) => (
              <div
                key={index}
                className="p-6 bg-amber-50 bg-gray-50 rounded-xl shadow hover:shadow-md transition h-full flex flex-col justify-start"
              >
                <div className="text-yellow-600 mb-3">{area.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition"
          >
            {showAll ? "Show Less" : "Show More Practice Areas"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
