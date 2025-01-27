"use client";
import Layout from "../layout";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";

export default function Projects() {
  const router = useRouter();

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* หัวข้อ My Projects */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight mb-12"
        >
          My Projects
        </motion.h1>

        {/* คำบรรยายผลงาน */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Here are some of the projects I have worked on. Each project showcases different skills and technologies I have explored.
        </motion.p>

        {/* รายการโปรเจค */}
        <div className="space-y-8 w-full max-w-3xl mb-16">
          {[ 
            { title: "🚀 Project 1", desc: "This project focuses on frontend technologies." },
            { title: "🌍 Project 2", desc: "This project highlights backend development." }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-200">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ปุ่มกลับหน้าโฮมแบบ FIXED ที่มุมขวาล่าง */}
        <motion.button
          onClick={() => router.push("/")}
          className="fixed-home-btn"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.9)",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="mr-2">🏠</span> Home
        </motion.button>
      </section>
    </Layout>
  );
}
