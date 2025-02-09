/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Zap,
  ArrowRight,
  Pencil,
  TwitterIcon,
  BookOpen,
  MessageCircle,
  ShoppingBag,
  Camera,
  Laptop,
  Globe,
  Briefcase,
  Store
} from "lucide-react";
Store
const AffiliateLandingPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    document.title = "Digital Income Revolution";
  }, []);

  const earningCards = [
    {
      icon: Briefcase,
      title: "Kelly Services Jobs",
      subtitle: "Find flexible work opportunities",
      rate: "$20-$35/hr",
      description:
        "Kelly Services connects job seekers with top companies. Explore contract, temp, and full-time roles.",
      imageAlt: "Kelly Services job listing",
      image: "https://i.ibb.co/mVtV73Hq/5cd2f0196c8f5.png",
      link: "https://xgenhub.com/kelly-service",
    },
    {
      icon: Store,
  title: "Aldi Jobs",
  subtitle: "Retail and warehouse positions available",
  rate: "$15-$30/hr",
  description: "Aldi offers flexible roles in retail, stocking, and warehouse management. Competitive pay and career growth opportunities.",
  imageAlt: "Aldi job listing",
      image: "https://i.ibb.co.com/m52zv5rF/Untitled-design.png",
link: "https://xgenhub.com/aldi-jobs"
    },
    
    {
      icon: Pencil,
      title: "Blog Content Writer",
      subtitle: "Write engaging blog posts",
      rate: "$35/hour",
      description: "Create compelling blog content for businesses worldwide",
      imageAlt: "Blog writing workspace",
      image: "https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
      link: "https://xgenhub.com/blog-content-writer",
    },
    {
      icon: TwitterIcon,
      title: "Social Media Writer",
      subtitle: "Craft viral tweets",
      rate: "$15/tweet",
      description: "Get paid for creating engaging social media content",
      imageAlt: "Social media marketing",
      image:
        "https://www.writerscookbook.com/wp-content/uploads/2017/01/social-media-for-writers.jpg",
      link: "https://xgenhub.com/social-media-writer",
    },
    {
      icon: BookOpen,
      title: "Article Writer",
      subtitle: "Write in-depth articles",
      rate: "$250/day",
      description: "Create professional articles for leading publications",
      imageAlt: "Article writing",
      image:
        "https://aaft.com/blog/wp-content/uploads/2022/09/1577881389bcddb7850b40a11fe40b00.jpg",
      link: "https://xgenhub.com/article-writer",
    },
    {
      icon: MessageCircle,
      title: "Forum Content Creator",
      subtitle: "Engage in discussions",
      rate: "$20/post",
      description: "Get paid for meaningful forum contributions",
      imageAlt: "Online forum discussion",
      image:
        "https://risemalaysia.com.my/wp-content/uploads/2024/08/Content-creators-and-programme-partners-participating-in-the-current-reel-trend-1024x683.jpg",
      link: "https://xgenhub.com/forum-content-creator",
    },
    {
      icon: ShoppingBag,
      title: "eCommerce Writer",
      subtitle: "Write product listings",
      rate: "$15/listing",
      description: "Create converting product descriptions",
      imageAlt: "eCommerce writing",
      image:
        "https://knowadays.com/wp-content/webp-express/webp-images/uploads/2023/12/What-Is-Ecommerce-Content-Writing__23F_.jpg.webp",
      link: "https://xgenhub.com/ecommerce-writer",
    },
    {
      icon: Camera,
      title: "Content Reviewer",
      subtitle: "Review digital content",
      rate: "$30/hour",
      description: "Earn by reviewing and editing content",
      imageAlt: "Content review process",
      image:
        "https://a.storyblok.com/f/88751/1940x1160/22c5c3357a/sb-7-steps-guide-on-creating-effective-digital-content-strategies-preview.png/m/840x0/filters:quality(90)",
      link: "https://xgenhub.com/content-reviewer",
    },
    {
      icon: Globe,
      title: "Travel Writer",
      subtitle: "Share travel experiences",
      rate: "$40/article",
      description: "Write engaging travel content and guides",
      imageAlt: "Travel writing",
      image:
        "https://i.natgeofe.com/n/1526f5b5-c8d9-4f5b-8bcb-4e794a5d5572/gettyimages-1125238321.jpg",
      link: "https://xgenhub.com/travel-writer",
    },
    {
      icon: Laptop,
      title: "Technical Writer",
      subtitle: "Write technical docs",
      rate: "$45/hour",
      description: "Create technical documentation and guides",
      imageAlt: "Technical writing",
      image: "https://clickhelp.com/images/feeds/blog/2018.03/types-intro.jpg",
      link: "https://xgenhub.com/technical-writer",
    },
  ];

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex flex-col overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 py-5 flex-grow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto"
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4 font-[Poppins]">
            Digital Income Revolution
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 mb-5 font-medium">
            Transform Your Online Potential into Predictable Passive Income
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
  {earningCards.map((card, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => handleCardHover(index)}
      onHoverEnd={() => setActiveCard(null)}
      className="bg-stone-50  rounded-xl shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white/90 rounded-lg hover:text-white hover:bg-indigo-600">
              <card.icon className="w-5 h-5 text-indigo-600 hover:text-white" />
            </div>
            <span className="text-white font-bold text-lg">{card.title}</span>
          </div>
          <span className="px-3 py-1 bg-green-500 text-white hover:bg-red-500 rounded-full text-sm font-bold">
            {card.rate}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Subtitle with style */}
        <p className="text-orange-600 text-sm mb-2 font-medium">{card.subtitle}</p>
        
        {/* Description with improved styling */}
        <p className="text-gray-800 text-sm mb-6 leading-relaxed">{card.description}</p>

        {/* Call to action with visual improvement */}
        <div className="flex justify-center">
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer  bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-red-700 hover:to-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center hover:text-white"
          >
            More Details <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default AffiliateLandingPage;
