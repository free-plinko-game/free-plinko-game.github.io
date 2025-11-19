import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Session {
  id: string
  user_id: string
  display_name: string
  casino: string
  risk_level: 'low' | 'medium' | 'high'
  bet_amount: number
  result_amount: number
  profit: number
  created_at: string
}

export interface LeaderboardEntry {
  user_id: string
  display_name: string
  total_profit: number
  sessions_count: number
  biggest_win: number
}

export interface UserProgress {
  user_id: string
  xp: number
  level: number
  total_balls_dropped: number
  created_at: string
  updated_at: string
}
