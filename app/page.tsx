export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a120b] flex items-center justify-center p-4 text-[#e5e5e5]">
      <div className="max-w-md w-full bg-[#2d2013] rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8 text-right" dir="rtl">
        <div className="w-20 h-20 bg-[#3d2b1d] rounded-full mx-auto mb-4 border-2 border-[#d4af37] flex items-center justify-center">
          <span className="text-[#d4af37] text-4xl">Φ</span>
        </div>
        <h1 className="text-2xl font-bold text-[#d4af37] text-center">بوابة الفيزياء التعليمية</h1>
        <p className="text-sm text-[#a68a64] mt-2 mb-8 text-center italic">الفخامة في المعرفة</p>
        <div className="space-y-4">
          <input type="text" placeholder="كود الطالب" className="w-full bg-[#1a120b] border border-[#d4af37]/30 rounded-lg py-3 px-4 text-white outline-none focus:border-[#d4af37]" />
          <input type="password" placeholder="كلمة المرور" className="w-full bg-[#1a120b] border border-[#d4af37]/30 rounded-lg py-3 px-4 text-white outline-none focus:border-[#d4af37]" />
          <button className="w-full bg-[#8b5e34] text-white font-bold py-3 rounded-lg hover:bg-[#634832] transition-all">دخول للمنصة</button>
        </div>
      </div>
    </div>
  );
}

