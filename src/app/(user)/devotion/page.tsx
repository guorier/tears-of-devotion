'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DevotionPage() {
  const [userId, setUserId] = useState<string | null>(null)
  const [content, setContent] = useState('')
  const [adminReply, setAdminReply] = useState('')
  const [verse, setVerse] = useState('요한복음 3:16')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser()
      const uid = data.user?.id ?? null
      setUserId(uid)

      if (!uid) return

      const { data: roleData } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', uid)
        .single()

      if (roleData?.role === 'admin') {
        setIsAdmin(true)
      }
    }

    loadUser()
  }, [])

  const handleSave = async () => {
    if (!userId) {
      alert('로그인 필요')
      return
    }

    const insertData: {
      user_id: string
      content: string
      verse: string
      admin_reply?: string
    } = {
      user_id: userId,
      content,
      verse
    }

    if (isAdmin) {
      insertData.admin_reply = adminReply
    }

    const { error } = await supabase
      .from('devotions')
      .insert([insertData])

    if (error) {
      alert(error.message)
      return
    }

    setContent('')
    if (isAdmin) setAdminReply('')
    alert('묵상 등록 완료')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center">
      <div className="w-full max-w-3xl p-10">
        <div className="bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-2xl font-bold mb-8 text-gray-800">묵상 작성</h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <div className="text-sm text-gray-500 mb-2">오늘의 말씀</div>
            <div className="text-lg font-semibold text-gray-800">{verse}</div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 mb-6">
            <div className="text-sm text-gray-500 mb-3">사용자 묵상</div>

            <textarea
              className="border border-gray-300 rounded-lg p-4 w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="묵상 입력"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {isAdmin && (
            <div className="border border-gray-200 rounded-lg p-5 mb-8 bg-gray-50">
              <div className="text-sm text-gray-500 mb-3">관리자 답변</div>

              <textarea
                className="border border-gray-300 rounded-lg p-4 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="관리자 답변 입력"
                value={adminReply}
                onChange={(e) => setAdminReply(e.target.value)}
              />
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
              onClick={handleSave}
            >
              저장
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}