import { TypedSupabaseClient } from '@/utils/typed-supabase-client'

export function getProfileByUserId(client: TypedSupabaseClient, userId: string) {
  return client
    .from('profiles')
    .select(
      `
      email
    `
    )
    .eq('id', userId)
    .throwOnError()
    .single()
}
