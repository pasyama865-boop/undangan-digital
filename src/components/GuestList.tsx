import { supabase } from "@/lib/supabase";
import { User, Clock } from "lucide-react"; 

async function getWishes() {
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal ambil data:", error);
    return [];
  }
  return data;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function GuestList() {
  const wishes = await getWishes();

  return (
    <section className="px-6 pt-8 pb-20 bg-white text-dark">
      <div className="max-w-md mx-auto">
        <h3 className="font-heading text-xl sm:text-2xl text-center mb-6 text-gold">
          {wishes?.length} Ucapan & Doa
        </h3>

        {/* Container Scrollable */}
        <div className="space-y-4 max-h-500px overflow-y-auto pr-2 custom-scrollbar">
          
          {wishes?.length === 0 ? (
            <p className="text-center text-gray-400 italic text-sm sm:text-base">
              Belum ada ucapan. Jadilah yang pertama mengirim doa!
            </p>
          ) : (
            wishes?.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-gold/20 p-2 rounded-full text-gold">
                    <User size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-800">{item.name}</h4>
                    <span className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                      <Clock size={10} /> {formatDate(item.created_at)} • 
                      <span className={`font-bold ${item.attendance === 'Hadir' ? 'text-green-600' : 'text-red-500'}`}>
                        {item.attendance}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body italic">
                  {item.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}