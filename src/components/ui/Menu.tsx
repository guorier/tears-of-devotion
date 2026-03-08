'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getUserRole } from '@/lib/auth'
import type { UserRole } from '@/types/user'

export default function Menu() {
  const [role, setRole] = useState<UserRole | null>(null)

  useEffect(() => {
    const load = async () => {
      const r = await getUserRole()
      setRole(r)
    }
    load()
  }, [])

  return (
    <nav className="flex gap-6 border-b p-4">

      <Link href="/">홈</Link>

      {role === 'user' && (
        <>
          <Link href="/devotion">묵상 작성</Link>
          <Link href="/mypage">내 묵상</Link>
        </>
      )}

      {role === 'admin' && (
        <>
          <Link href="/admin/devotions">묵상 관리</Link>
          <Link href="/admin/users">회원 관리</Link>
        </>
      )}

    </nav>
  )
}