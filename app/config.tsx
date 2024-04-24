import * as dotenv from 'dotenv';
import { cleanEnv, num, str } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  PORT: num(),

  NEXT_PUBLIC_SUPABASE_ANON_KEY: str(),

  NEXT_PUBLIC_SUPABASE_URL: str(),

  APP_NAME: str(),

  MORALIS_API_KEY: str(),

  SUPABASE_JWT_SECRET: str(),

  SUPABASE_SERVICE_ROLE_KEY: str(),

  CLIENT_URL: str(),
});