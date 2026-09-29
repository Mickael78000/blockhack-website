const logoImgClass =
  "h-[56px] w-auto max-h-[70%] object-contain md:h-[90px]";

export const TrustedByLogos = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 justify-items-center md:justify-items-stretch mt-[45.3891px] md:mt-[58.7513px]">
      <a
        href="https://www.ssi.gouv.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-[80px] md:h-[160px] w-full"
      >
        <img
          src="/images/Anssi.webp"
          alt="ANSSI"
          className="h-full max-w-full object-contain"
        />
      </a>
      <a
        href="https://www.cursor.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 h-[80px] md:h-[160px] w-full text-white hover:text-cyan-400"
      >
        <img
          src="https://img.logo.dev/cursor.com?token=pk_atDXuFQ1TzWSna0tSmBuag"
          alt=""
          className={logoImgClass}
        />
        <span className="text-lg md:text-2xl font-medium font-space_grotesk">Cursor</span>
      </a>
      <a
        href="https://kubernetes.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 h-[80px] md:h-[160px] w-full text-white hover:text-cyan-400"
      >
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/kubernetes.svg"
          alt=""
          className={`${logoImgClass} invert`}
        />
        <span className="text-lg md:text-2xl font-medium font-space_grotesk">Kubernetes</span>
      </a>
      <a
        href="https://www.perplexity.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 h-[80px] md:h-[160px] w-full text-white hover:text-cyan-400"
      >
        <img
          src="https://img.logo.dev/perplexity.ai?token=pk_atDXuFQ1TzWSna0tSmBuag"
          alt=""
          className={logoImgClass}
        />
        <span className="text-lg md:text-2xl font-medium font-space_grotesk">Perplexity AI</span>
      </a>
    </div>
  );
};
