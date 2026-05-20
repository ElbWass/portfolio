import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { bitmoji } from "../assets";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-10 pt-28 pb-32 sm:pb-16`}
      >
        {/* ── Left : text ── */}
        <div className="flex flex-row items-start gap-5 flex-1">
          {/* Accent bar */}
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-[#64ffda]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span className="brand-text-gradient">{t("hero.name")}</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white/80 max-w-lg`}>
              {t("hero.subtitle")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </motion.div>
        </div>

        {/* ── Right : bitmoji ── */}
        <motion.div
          className="flex-shrink-0 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Halo teal derrière l'avatar */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(100,255,218,0.12) 0%, transparent 70%)",
              transform: "scale(1.2)",
            }}
          />
          <motion.img
            src={bitmoji}
            alt="Wassil avatar"
            className="w-[180px] sm:w-[260px] lg:w-[320px] object-contain select-none relative z-10"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              maskImage: "radial-gradient(ellipse 88% 82% at 50% 42%, black 48%, transparent 92%)",
              WebkitMaskImage: "radial-gradient(ellipse 88% 82% at 50% 42%, black 48%, transparent 92%)",
              filter: "drop-shadow(0px 20px 40px rgba(100, 255, 218, 0.25))",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
