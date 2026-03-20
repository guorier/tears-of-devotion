export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/80 px-5 py-5 backdrop-blur-xl">
      <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#334155_100%)] px-5 py-4 text-white shadow-[0_20px_45px_rgba(15,23,42,0.22)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300">
              TEARS OF DEVOTION
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              하루의 묵상과 기도를 모바일에서 차분하게 기록할 수 있도록 구성한 공간입니다.
            </p>
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
            Mobile
          </div>
        </div>
      </div>
    </footer>
  )
}
