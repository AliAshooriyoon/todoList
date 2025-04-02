import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tojpwzlimkevhcvajtgr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvanB3emxpbWtldmhjdmFqdGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1ODY4MzUsImV4cCI6MjA1OTE2MjgzNX0.Mv2O7UWfnif738509BaGRrTUQPDd0LV6r0pcYPCx-cs";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
