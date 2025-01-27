"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaArrowDown } from 'react-icons/fa';
import { useState } from "react";



const items = [
  { 
    image: "/Acti1 oph.jpg", 
    text: "CSTU Open House 2024", 
    description: "An annual event where we showcase our Computer Science department to prospective students."
  },
  { 
    image: "/Acti2 Webpak.jpg", 
    text: "CSTU Web-Dev Team", 
    description: "A team of passionate developers working on web projects for the university." 
  },
  { 
    image: ["/Acti3 e-sports.jpg", "/Acti3.1.jpg"], 
    text: "CSTU E-Sports", 
    description: "Competing in university-level gaming tournaments and fostering teamwork through esports." 
  },
  { 
    image: "/Acti4 orientation.jpg", 
    text: "CSTU Orientation", 
    description: "Welcoming new students and helping them integrate into university life." 
  },
  { 
    image: "/acti5_byenior.jpg", 
    text: "CSTU Byenior 2024", 
    description: "A farewell event for graduating seniors filled with fun and memories." 
  },
  { 
    image: ["/Acti6_SOWN1.jpg", "/Acti6_SOWN2.jpg"], 
    text: "International Olympiad in Informatics: IOI", 
    description: "Participating in one of the most prestigious programming competitions globally." 
  },
  { 
    image: ["/Acti7_Ngao1.jpg", "/Acti7_Ngao3.jpg"], 
    text: "Participate in volunteer activities in the northern region", 
    description: "Helping communities in the northern region through various volunteer activities." 
  },
  { 
    image: "/Acti8.jpg", 
    text: "Volunteer camp", 
    description: "Engaging in community service and making a positive impact through volunteer work." 
  },
];


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const { ref: motionRef, inView } = useInView({
    triggerOnce: true, // Will trigger animation only once when entering the viewport
    threshold: 0.5, // Animation triggers when 50% of the element is visible
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.5, // Trigger when the content is 50% visible
  });

  useEffect(() => {
    // เมื่อเพจโหลดเสร็จให้เลื่อนกลับไปที่บนสุด
    window.scrollTo(0, 0);
  }, []); // empty dependency array ทำให้มันทำงานเพียงครั้งเดียวตอนที่เพจโหลด

  return (
    <section className="text-center min-h-screen flex flex-col justify-center px-6">
      <div className="relative flex justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight mb-6"
        >
          Hi, I'm Munitsara :]
        </motion.h1>
        <motion.div
          className="absolute top-[-60px] w-20 h-20"
          animate={{
            x: ["-40%", "130%"], // Moving from left to right
          }}
          transition={{
            x: {
              repeat: Infinity, // Make it move back and forth
              repeatType: "loop", // Continuous loop
              duration: 13, // Speed up the movement
              ease: "linear", // Linear easing
            },
          }}
        >
          <Image src="/mario-walking.gif" alt="Walking Mario" width={80} height={80} />
        </motion.div>
      </div>

      <p className="mt-2 text-xl text-gray-400 leading-relaxed mb-12">
        Software Engineer | Web Developer | Great Communicator & Team Player
      </p>

       {/*  /ปุ่มลงไปล่างสุด/  */}
       <motion.button
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
        className="fixed-scroll-btn bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-full flex justify-center items-center"
        whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)" }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)} // เมื่อเมาส์ชี้
        onMouseLeave={() => setIsHovered(false)} // เมื่อเมาส์ออก
      >
        <FaArrowDown className="h-8 w-8 text-white" />
      </motion.button>


        {/* คำอธิบายที่จะแสดงเมื่อเมาส์ชี้ไปที่ปุ่ม */}
        {isHovered && (
          <div className="hover-description">
            Scroll down to see my projects!
          </div>
        )}





      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300">
          I am a passionate software engineer and web developer with a keen interest in creating innovative and efficient solutions. I am always excited about exploring new technologies and applying them to real-world problems.
        </p>
      </motion.div>

      {/* University Activities */}
      <motion.div
        ref={motionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : -50,
        }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-6">
          University Activities
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          Throughout my university journey, I actively participated in various activities that helped me grow both personally and professionally. Here are some of the highlights:
        </p>

        <ul className="list-disc pl-6 text-gray-300 text-lg space-y-3">
          <li>🌱 Participated in a sustainable tech project focusing on green energy.</li>
          <li>💻 Developed a web-based app for a university project management system.</li>
        
          <li>🛠️ Volunteered in several local tech initiatives to help students learn programming.</li>
        </ul>
      </motion.div>

      {/* Activity Images & Descriptions */}
      <section className="text-center min-h-screen flex flex-col justify-center px-6">
        {items.map((item, index) => {
          const images = Array.isArray(item.image) ? item.image : [item.image];

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center mb-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full flex flex-col items-center mb-8">
                {images.map((image, idx) => (
                  <motion.div key={idx} className="mb-8"> 
                    <Image
                      src={image}
                      alt={`Image ${index + 1}-${idx + 1}`}
                      width={800}
                      height={450}
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="w-full text-center mt-6"> 
                <h3 className="text-2xl font-bold mb-4">{item.text}</h3>
                <p className="text-lg text-gray-300">
                  {item.description}
                </p>
              </div>

            </motion.div>
          );
        })}
      </section>

      {/* Explore My Projects Button */}
      <motion.button
        ref={contentRef}
        onClick={() => router.push("/projects")}
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 px-8 py-3 text-white 
                    bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg 
                    border-2 border-transparent hover:border-blue-500 transition-all duration-300 
                    ease-in-out transform hover:scale-110 hover:rotate-3 shadow-lg mb-4 ${
                      contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 10 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Explore My Projects
      </motion.button>
    </section>
  );
}
