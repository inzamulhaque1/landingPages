/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";

const MakeMoney = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      text: "Zero Upfront Investment",
      description: "Start earning without spending a dime. Our system minimizes initial costs."
    },
    {
      icon: Zap,
      text: "Rapid Results Strategy",
      description: "Accelerate your income with proven, fast-track techniques."
    },
    {
      icon: Target,
      text: "Targeted Marketing",
      description: "Precise targeting ensures maximum conversion and revenue."
    }
  ];

  const handleFeatureHover = (index) => {
    setActiveFeature(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex flex-col overflow-hidden relative">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 py-16 flex-grow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 font-[Poppins]">
            100% FREE Training Reveals...
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            The simple copy/paste method 1,000s of newbies are using to make money online 💵
          </p>
          <p className="text-md sm:text-lg text-gray-600 mb-12">
            ...with NO website, product, or tech skills
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => handleFeatureHover(index)}
                onHoverEnd={() => setActiveFeature(null)}
                className={`bg-white p-6 sm:p-7 rounded-2xl shadow-lg transition-all duration-300
                ${activeFeature === index ? "ring-4 ring-indigo-500 ring-opacity-50" : "hover:shadow-xl"}`}
              >
                <div className="text-indigo-600 mb-4 text-4xl flex justify-center">
                  <feature.icon strokeWidth={1.5} size={48} />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">
                  {feature.text}
                </h3>
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 text-sm"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setModalVisible(true)}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 hover:from-indigo-700 hover:to-purple-700 transition flex items-center"
            >
              Get Instant Access <ArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
            onClick={() => setModalVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <CheckCircle className="text-green-500 mx-auto text-5xl sm:text-6xl mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4">
                Your Journey Begins!
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8">
                We've received your email. Check your inbox for exclusive strategies to skyrocket your online income.
              </p>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 sm:py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition"
              >
                Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MakeMoney;
