export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(5,5,16,0.8)] mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center text-slate-400 font-syne text-sm">
        <p>© {new Date().getFullYear()} Himesh Verma. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-60"></p>
      </div>
    </footer>
  );
}
