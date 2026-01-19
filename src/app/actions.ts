'use server' 

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function submitRsvp(formData: FormData) {
  const nama = formData.get("nama")
  const message = formData.get("message")
  const attendance = formData.get("attendance")

  if (!nama || !attendance) {
    return { success: false, message: "Nama dan Kehadiran wajib diisi!" }
  }

  const { error } = await supabase
    .from("guestbook")
    .insert({ nama, message, attendance })

  if (error) {
    console.error(error)
    return { success: false, message: "Gagal menyimpan data." }
  }

  revalidatePath("/") 
  
  return { success: true, message: "Terima kasih atas ucapannya!" }
}