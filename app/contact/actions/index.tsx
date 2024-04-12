'use server'

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { Database } from '@/lib/supabase'

export const updateInqueries = async (formData: FormData, user_id: string) => {
    
    'use server'
  try {
    const id = formData.get('id')
    const name = formData.get('name')
    const email = formData.get('email')

    const message = formData.get('message')

    const cookieStore = cookies()

    const supabaseAction = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )

    await supabaseAction.from('inqueries').upsert({
      id: user_id as string,
      name,
      email,
      message,
      updated_at: new Date().toISOString(),
    })

    revalidatePath('/contact')

    return {
      message: 'Success!',
    }
  } catch (error) {
    return {
      message: 'There was an error',
    }
  }
}
