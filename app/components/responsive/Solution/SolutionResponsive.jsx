import React from "react";

const SolutionResponsive = ({ isInBound }) => {
  const solutions = [
    {
      title: isInBound ? "Retail Store" : "Barbershop",
      description: isInBound
        ? "Sales new product, customer follow-up, more."
        : "Availability, bookings, inquiries and more",
    },
    {
      title: isInBound ? "Financial Services" : "Clinic Office",
      description: isInBound
        ? "Lead generation, loan offers, appointment setting."
        : "Schedule appointments, patient FAQs",
    },
    {
      title: isInBound ? "Market Research" : "Restaurant",
      description: isInBound
        ? "Data collection, surveys, customer insights."
        : "Reservations, menu inquiries",
    },
    {
      title: isInBound ? "Non-Profit Organization" : "SaaS Website",
      description: isInBound
        ? "Fundraising, event invitations, volunteer recruitment."
        : "Support, product information, troubleshooting",
    },
    {
      title: isInBound ? "Healthcare Provider" : "Realtor Office",
      description: isInBound
        ? "Appointment reminders, patient follow-up, wellness checks."
        : "Property inquiries, viewings",
    },
    {
      title: isInBound ? "Debt Collection" : "Insurance Companies",
      description: isInBound
        ? "Negotiate repayments."
        : "Claims, policy help, support",
    },
  ];
  return (
    <div className="max-w-md mx-auto p-4 text-center block lg:hidden md:hidden  ">
      {solutions.map((solution, idx) => (
        <div key={idx} className="mb-4">
          <div className="border border-black rounded-full px-6 py-4">
            <h1 className="text-2xl text-left font-light text-gray-950">
              {solution.title}
            </h1>
            <p className="text-sm text-left text-gray-600">
              {solution.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionResponsive;
