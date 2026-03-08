import { supabase } from '@/lib/supabase'
import type { UserRole } from '@/types/user'

export async function getUserRole(): Promise<UserRole | null> {
  const { data } = await supabase.auth.getUser()

  const uid = data.user?.id
  if (!uid) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', uid)
    .single()

  return profile?.role ?? null
}