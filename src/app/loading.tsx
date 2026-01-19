export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 bg-dark flex flex-col items-center justify-center text-gold">
      {/* Animasi Hati Berdenyut */}
      <div className="animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-16 h-16"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 8.64-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <p className="mt-4 font-serif tracking-widest text-sm animate-bounce">
        MEMUAT UNDANGAN...
      </p>
    </div>
  );
}