"use client";
import Head from "next/head";
import FAQAccordion from "../components/Accordian";
import useCustomHook from "../CustomHooks/useCustomHook";
const FAQ = () => {
  useCustomHook();
  const faqs = [
    {
      question: "What is Brainiatic?",
      answer:
        "Brainiatic is a comprehensive call management service designed to handle both inbound and outbound calls for businesses. Whether you're looking to manage customer inquiries, schedule appointments, or engage in customer outreach, Brainiatic provides a seamless, human-like experience for your callers. Our service is tailored to boost your business’s efficiency, ensuring no call goes unanswered, even during after-hours.",
    },
    {
      question: "Is setting up and integrating easy?",
      answer:
        "Yes, it takes less than five minutes to build and launch your AI receptionist. Just tell the receptionist about your business, make your payment, and start forwarding calls!",
    },
    {
      question: "Do I need to transfer my phone number?",
      answer:
        "No, you don’t need to transfer your phone number to use Brainiatic’s services.",
    },
    {
      question: "What kinds of questions can Brainiatic handle?",
      answer:
        "Brainiatic can handle a wide variety of questions, including customer inquiries, FAQs, and more.",
    },
    {
      question: "How many phone calls can Brainiatic handle at any given time?",
      answer:
        "Brainiatic can handle multiple phone calls concurrently without any issues.",
    },
    {
      question: "Can Brainiatic handle calls in other languages?",
      answer:
        "Yes, Brainiatic is capable of handling calls in multiple languages based on your business needs.",
    },
  ];

  return (
    <div className="py-8 px-4">
      <Head>
        <title className="sm:text-3xl lg:text-3xl ">
          Frequently Asked Questions
        </title>
        <meta
          name="description"
          content="Frequently asked questions about Brainiatic"
        />
      </Head>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="text-lg mb-8 text-center text-gray-800">
          We’ve gathered some of the most common questions about Brainiatic and
          how we can help your business. If you don’t find the answer you’re
          looking for, feel free to reach out to us through our contact form.
        </p>
        <div className="bg-transparent ">
          {faqs.map((faq, index) => (
            <div className="mt-3">
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
