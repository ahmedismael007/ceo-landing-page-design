import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthEurope,
  faFileInvoiceDollar,
  faListCheck,
  faMugHot,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '/images/features/project_management.png',
      title: "Project Management",
      description:
        "Plan, organize, and track projects efficiently with tasks, milestones, and real-time progress updates.",
    },
    {
      id: 2,
      icon: '/images/features/accounting.png',
      title: "Accounting",
      description:
        "Manage invoices, expenses, payroll, and financial reports all in one place with ease.",
    },
    {
      id: 3,
      icon: '/images/features/hr.png',
      title: "HR",
      description:
        "Streamline employee records, attendance, recruitment, and performance evaluations.",
    },
    {
      id: 4,
      icon: '/images/features/website_management.png',
      title: "Website Management",
      description:
        "Easily update and manage website content, media, and analytics without technical hassle.",
    },
    {
      id: 5,
      icon: '/images/features/buffet.png',
      title: "Buffet",
      description:
        "Organize cafeteria menus, manage orders, and provide employees with seamless meal services.",
    },
  ];

  return (
    <section className="md:px-40" data-aos="fade-up">
      <div className="md:px-10 mb-10">
        <h2 className="text-6xl text-primary font-bold mb-4">FOR CEO</h2>
        <h4 className="text-4xl">Enjoy managing your work</h4>
      </div>
      <div className="bg-[#ae9c56] p-10 rounded-3xl relative text-black">
        <div className="bg-[#d2be6f] -rotate-90 absolute top-20 -left-17 p-2 hidden lg:block">
          FEATURES
        </div>

        <div className="mb-10">
          <h3 className="text-3xl">
            A rich suite of tools that provide an exceptional managing
            experience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="ring-2 ring-white bg-gradient-to-br from-[#c0af6c] to-[#cebe7d] text-secondary rounded-3xl p-10 flex gap-5 hover:scale-110 transition-all duration-700"
            >
              <div className="w-20 shrink-0 text-slate-900">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="object-fill "
                />
              </div>
              <div>
                <h3 className="text-3xl mb-5 text-secondary">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
