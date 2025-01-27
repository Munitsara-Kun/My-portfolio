import './globals.css';

import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

