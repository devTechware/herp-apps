import { motion as Motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="relative"
      >
        <Motion.img
          src="/logo.png"
          alt="Loading..."
          className="w-32 h-32 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Motion.div>

      <Motion.p
        className="mt-8 text-xl font-semibold text-blue-800 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.5,
        }}
      >
        Loading<span className="ml-1 animate-pulse text-blue-600">...</span>
      </Motion.p>
    </div>
  );
};

export default Loading;
