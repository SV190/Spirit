import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://okqmqiimyeggryzbcmbq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcW1xaWlteWVnZ3J5emJjbWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NDM5MTksImV4cCI6MjA0NjIxOTkxOX0.Ib3lNmUm-P1BK0L2GSCeaOK-dyUBPx2Wpc0ai4R4LWc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
