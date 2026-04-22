export default function BriefingVideoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-0 py-0 md:px-6 md:py-10">
        <div className="w-full bg-black md:rounded-[2rem] md:border md:border-white/10 md:bg-[#111318] md:p-6">
          <div className="px-4 pt-5 md:px-2 md:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6a96b]">
              Case Briefing
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Watch this first
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Your official briefing from Detective Good and Detective Swan before
              you begin the investigation.
            </p>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="w-full overflow-hidden bg-black md:max-w-[380px] md:rounded-[1.25rem] md:border md:border-white/10">
              <video
                className="block h-auto w-full"
                controls
                playsInline
                preload="metadata"
                poster="/images/briefing-poster.png"
              >
                <source src="/video/case001-briefing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}