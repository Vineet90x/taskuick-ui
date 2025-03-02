"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Choose Your Project",
    description: "Select the type of solution you want to build with us.",
  },
  {
    id: 2,
    title: "Select Features",
    description: "Customize your solution with the features you need.",
  },
  {
    id: 3,
    title: "Review Pricing",
    description:
      "Get a quote based on your selected features and requirements.",
  },
];

const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setCompleted([...completed, currentStep]);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCompleted(completed.filter((step) => step !== currentStep - 1));
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">What would you like to build?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Web Application",
                "Mobile App",
                "E-commerce Store",
                "AI Solution",
                "Custom Software",
                "Automation Tool",
              ].map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 hover:border-blue-500 transition-all bg-gray-800"
                >
                  <p className="font-medium">{option}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Select the features you need</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "User Authentication",
                "Payment Integration",
                "Real-time Updates",
                "Admin Dashboard",
                "Analytics",
                "API Integration",
                "Mobile Responsive",
                "Multi-language Support",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-800"
                >
                  <input
                    type="checkbox"
                    id={`feature-${index}`}
                    className="mr-3 h-5 w-5 text-blue-600 bg-gray-700 border-gray-600"
                  />
                  <label
                    htmlFor={`feature-${index}`}
                    className="cursor-pointer"
                  >
                    {feature}
                  </label>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Review Your Custom Quote</h3>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <span className="font-medium">Base Package</span>
                <span className="font-bold text-green-400">$2,500</span>
              </div>
              <div className="py-4 border-b border-gray-700">
                <p className="font-medium mb-2">Selected Features:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>User Authentication</li>
                  <li>Admin Dashboard</li>
                  <li>Mobile Responsive</li>
                </ul>
              </div>
              <div className="pt-4 flex justify-between items-center">
                <span className="text-lg font-medium">Total Estimate</span>
                <span className="text-xl font-bold text-blue-400">$4,200</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                This is an estimate based on your selections. Final pricing may
                vary based on specific requirements.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-xl shadow-lg text-white">
      {/* Stepper Header */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step) => (
          <React.Fragment key={step.id}>
            {/* Step Circle */}
            <div className="flex flex-col items-center relative">
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  completed.includes(step.id)
                    ? "bg-green-500 border-green-500"
                    : currentStep === step.id
                    ? "border-blue-400 text-blue-400"
                    : "border-gray-600 text-gray-600"
                }`}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: currentStep === step.id ? 1.1 : 1,
                  backgroundColor: completed.includes(step.id)
                    ? "#10B981"
                    : currentStep === step.id
                    ? "#111827"
                    : "#111827",
                }}
                transition={{ duration: 0.3 }}
              >
                {completed.includes(step.id) ? (
                  <FaCheck className="text-white" />
                ) : (
                  <span>{step.id}</span>
                )}
              </motion.div>

              {/* Step Title */}
              <div className="text-center mt-2">
                <p
                  className={`font-medium ${
                    currentStep === step.id
                      ? "text-blue-400"
                      : completed.includes(step.id)
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 max-w-[120px] hidden md:block">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connector Line */}
            {step.id !== steps.length && (
              <motion.div
                className="flex-1 h-1 mx-2 bg-gray-700"
                initial={{ backgroundColor: "#374151" }}
                animate={{
                  backgroundColor: completed.includes(step.id)
                    ? "#10B981"
                    : "#374151",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8 min-h-[300px]"
      >
        {renderStepContent()}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4 border-t border-gray-700">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center px-4 py-2 rounded-lg ${
            currentStep === 1
              ? "bg-gray-800 text-gray-500 cursor-not-allowed"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaArrowLeft className="mr-2" /> Previous
        </button>

        <button
          onClick={nextStep}
          className={`flex items-center px-4 py-2 rounded-lg ${
            currentStep === steps.length
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {currentStep === steps.length ? "Complete" : "Next"}{" "}
          {currentStep !== steps.length && <FaArrowRight className="ml-2" />}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
