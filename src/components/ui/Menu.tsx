'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronRight, LogIn, Menu as MenuIcon, UserPlus } from 'lucide-react'
import { getUserRole } from '@/lib/auth'
import type { UserRole } from '@/types/user'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const sections = {
  guest: [
    { href: '/login', label: 'Login', description: 'Continue your devotion journey.' },
    { href: '/register', label: 'Sign Up', description: 'Create a new account in minutes.' },
  ],
  user: [
    { href: '/devotion', label: 'Write Devotion', description: 'Capture today\'s prayer and reflection.' },
    { href: '/mypage', label: 'My Journal', description: 'Review saved notes and emotional flow.' },
  ],
  admin: [
    { href: '/admin/devotions', label: 'Manage Devotions', description: 'Review devotion posts and visibility.' },
    { href: '/admin/users', label: 'Manage Members', description: 'Check member status and permissions.' },
  ],
} as const

export default function Menu() {
  const [role, setRole] = useState<UserRole | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const load = async () => {
      const nextRole = await getUserRole()
      setRole(nextRole)
    }

    load()
  }, [])

  const primaryLinks = role === 'admin' ? sections.admin : role === 'user' ? sections.user : sections.guest
  const quickActions =
    role === null
      ? [
          { href: '/login', label: 'Login', icon: LogIn },
          { href: '/register', label: 'Sign Up', icon: UserPlus },
        ]
      : []

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[88vw] max-w-[360px] border-l border-white/50 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_38%,#ffffff_100%)] px-0 pb-8 pt-0"
      >
        <SheetHeader className="border-b border-sky-100 px-6 pb-6 pt-8 text-left">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7c3aed_0%,#22c55e_100%)] text-base font-bold text-white shadow-[0_16px_30px_rgba(76,29,149,0.28)]">
              TD
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                Navigation
              </p>
              <SheetTitle className="mt-1 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                Mobile Menu
              </SheetTitle>
            </div>
          </div>

          {quickActions.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map(({ href, label, icon: Icon }) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          )}
        </SheetHeader>

        <nav className="px-5 pt-6">
          <div className="rounded-[2rem] bg-white/80 p-3 shadow-[0_20px_45px_rgba(148,163,184,0.2)] backdrop-blur">
            {primaryLinks.map((item) => {
              const isActive = pathname === item.href

              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between rounded-[1.5rem] px-4 py-4 transition',
                      isActive
                        ? 'bg-[linear-gradient(135deg,#1d4ed8_0%,#7c3aed_100%)] text-white shadow-[0_16px_35px_rgba(59,130,246,0.28)]'
                        : 'text-slate-700 hover:bg-slate-50'
                    )}
                  >
                    <span className="min-w-0">
                      <span className="block text-base font-semibold tracking-[-0.03em]">
                        {item.label}
                      </span>
                      <span
                        className={cn(
                          'mt-1 block text-xs',
                          isActive ? 'text-white/80' : 'text-slate-500'
                        )}
                      >
                        {item.description}
                      </span>
                    </span>
                    <ChevronRight className={cn('h-5 w-5 shrink-0', isActive ? 'text-white' : 'text-slate-400')} />
                  </Link>
                </SheetClose>
              )
            })}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
