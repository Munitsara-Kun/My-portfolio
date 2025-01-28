"use client";
import Layout from "../layout";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();
  const projects = [
    { 
      title: "🚀 Project 1", 
      link: "https://example.com/project1",
      desc: "This project explores frontend development.", 
      image: "/Acti6_SOWN1.jpg"
    },
    { 
      title: "🌍 Project 2", 
      link: "https://example.com/project2",
      desc: "This project focuses on backend technologies.", 
      image: "/project2.jpg"
    },
    { 
      title: "Weblover-toyou", 
      link: "https://munitsara-kun.github.io/weblover-toyou/",
      desc: "A Web application that can sent to your bf :]", 
      image: "/project3.jpg"
    },
    { 
      title: "🛠 Project 4", 
      link: "https://example.com/project4",
      desc: "An automation tool for developers.", 
      image: "/project4.jpg"
    }
  ];
  
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* หัวข้อ My Projects */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text leading-tight mb-12 border-b-4 border-indigo-500 pb-4"
        >
          My Projects
        </motion.h1>

        {/* คำบรรยายผลงาน */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Explore my projects, each demonstrating different technologies and problem-solving approaches.
        </motion.p>

        {/* รายการโปรเจค */}
        <div className="space-y-8 w-full max-w-4xl mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg border border-indigo-600 hover:shadow-indigo-500 transition duration-300"
            >
              <div className="mb-4 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="rounded-lg shadow-lg object-cover border border-gray-700"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">
                <strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline hover:text-indigo-300 transition duration-200">{project.link}</a>
              </p>
              <p className="text-gray-400 mt-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ปุ่มกลับหน้าโฮมแบบ FIXED ที่มุมขวาล่าง */}
        <motion.button
          onClick={() => router.push("/")}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-full shadow-lg shadow-indigo-500 transition-transform transform hover:scale-105"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            boxShadow: "0 0 25px rgba(99, 102, 241, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="mr-2">🏠</span> Home
        </motion.button>
      </section>
    </Layout>
  );
}
