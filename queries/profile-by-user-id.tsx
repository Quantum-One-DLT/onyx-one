import { TypedSupabaseClient } from '@/utils/typed-supabase-client'

export function getProfileByUserId(client: TypedSupabaseClient, user?.id: string) {
  return client
    .from('profiles')
    .select(
      `
      email
    `
    )
    .eq('id', user?.id)
    .throwOnError()
    .single()
}
