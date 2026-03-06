'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DevotionPage() {

  const [userId, setUserId] = useState<string | null>(null)
  const [content, setContent] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUserId(data.user?.id ?? null)
    }
    loadUser()
  }, [])

  const handleSave = async () => {

    if (!userId) {
      alert('로그인 필요')
      return
    }

    const { error } = await supabase
      .from('devotions')
      .insert([
        {
          user_id: userId,
          content
        }
      ])

    if (error) {
      alert(error.message)
      return
    }

    setContent('')
    alert('묵상 등록 완료')
  }

  return (

    <div className="p-20">

      <h1 className="text-xl mb-10">묵상 작성</h1>

      <textarea
        className="border p-3 w-full h-200"
        placeholder="묵상 입력"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="mt-10">
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleSave}
        >
          저장
        </button>
      </div>

    </div>

  )
}