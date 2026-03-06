'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function MyPage() {

  const [list, setList] = useState<any[]>([])

  useEffect(() => {

    const load = async () => {

      const { data: user } = await supabase.auth.getUser()

      if (!user.user) return

      const { data } = await supabase
        .from('devotions')
        .select('*')
        .eq('user_id', user.user.id)
        .order('created_at', { ascending: false })

      setList(data || [])
    }

    load()

  }, [])

  return (
    <div className="p-20">
      <h1 className="text-xl mb-10">내 묵상</h1>

      {list.map((v) => (
        <div key={v.id} className="border p-3 mb-3">
          {v.content}
        </div>
      ))}

    </div>
  )
}