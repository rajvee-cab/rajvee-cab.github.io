import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-2">404</h2>
      <p className="text-slate-600 mb-6">પેજ મળ્યું નથી (Page Not Found)</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition"
      >
        હોમપેજ પર જાઓ
      </Link>
    </div>
  );
}

