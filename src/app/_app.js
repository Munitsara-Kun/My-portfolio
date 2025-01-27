<motion.div
  key={index}
  className="flex flex-col items-center mb-16"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
  transition={{ duration: 0.6 }}
>
  <div className="w-full flex flex-col items-center mb-8">
    <motion.div key={idx} className="mb-8"> 
      <Image
        src="/path/to/your-image.jpg" // Add your image path here
        alt="Your image description"
        width={800} // Adjust the width as needed
        height={450} // Adjust the height as needed
        className="rounded-lg shadow-lg object-cover"
      />
    </motion.div>
  </div>
  <div className="w-full text-center mt-6"> 
    <h3 className="text-2xl font-bold mb-4">Your Activity Title</h3>
    <p className="text-lg text-gray-300">
      Your image description here.
    </p>
  </div>
</motion.div>
