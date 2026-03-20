'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole, Mail, MoveRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert(error.message)
      return
    }

    alert('로그인에 성공했습니다.')
    router.push('/devotion')
  }

  return (
    <section className="relative overflow-hidden px-5 py-8">
      <div className="absolute left-[-4rem] top-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-3rem] h-36 w-36 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_25px_60px_rgba(15,23,42,0.10)] backdrop-blur">
        <div className="relative h-[250px] overflow-hidden">
          <Image
            src="/images/bg_img.jpg"
            alt="빛으로 소금으로 살아가는 사람들의 이야기"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.24)_45%,rgba(15,23,42,0.68)_100%)]" />
          <div className="absolute left-0 right-0 top-0 flex justify-between p-5">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur">
              Daily Devotion
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h1 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.04em]">
              빛으로 소금으로
            </h1>
            <p className="mt-2 text-base font-medium leading-7 text-white/90">
              살아가는 사람들의 이야기
            </p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-6 text-slate-500">
            이메일과 비밀번호를 입력하면 저장된 기도문과 묵상 기록을 바로 이어서 볼 수 있습니다.
          </p>

          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">이메일</span>
              <div className="flex items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">비밀번호</span>
              <div className="flex items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50/80 px-4 py-3 shadow-inner shadow-slate-100">
                <LockKeyhole className="h-4 w-4 text-slate-400" />
                <input
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>
          </div>

          <button
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-[1.4rem] bg-[linear-gradient(135deg,#1d4ed8_0%,#7c3aed_100%)] px-4 py-4 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(59,130,246,0.28)] transition hover:-translate-y-0.5"
            onClick={handleLogin}
          >
            로그인
            <MoveRight className="h-4 w-4" />
          </button>

          <div className="mt-6 rounded-[1.5rem] bg-slate-50 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              New Here
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              아직 계정이 없다면 회원가입 후 바로 묵상 작성을 시작할 수 있습니다.
            </p>
            <Link
              href="/register"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
            >
              회원가입으로 이동
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
