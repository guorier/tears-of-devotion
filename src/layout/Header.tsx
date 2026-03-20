import Link from 'next/link'
import Menu from '@/components/ui/Menu'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7c3aed_0%,#22c55e_100%)] text-lg font-bold text-white shadow-[0_14px_30px_rgba(76,29,149,0.28)]">
            TD
          </span>
          <span className="flex flex-col">
            <span className="text-[1.1rem] font-semibold tracking-[-0.03em] text-slate-900">
              Tears of Devotion
            </span>
            <span className="text-xs font-medium text-slate-500">
              Mobile worship journal
            </span>
          </span>
        </Link>

        <Menu />
      </div>
    </header>
  )
}
