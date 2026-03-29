import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a120b] flex items-center justify-center p-4 text-right" dir="rtl">
      <div className="max-w-md w-full bg-[#2d2013] rounded-2xl shadow-2xl border border-[#d4af37]/20 p-8">
        
        {/* الشعار */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#3d2b1d] rounded-full mx-auto mb-4 border-2 border-[#d4af37] flex items-center justify-center shadow-lg text-[#d4af37] text-4xl">
            Φ
          </div>
          <h1 className="text-2xl font-bold text-[#d4af37]">بوابة الفيزياء التعليمية</h1>
          <p className="text-sm text-[#a68a64] mt-2 italic">التميز في العلم.. الفخامة في المعرفة</p>
        </div>

        {/* نموذج الدخول */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#d4af37]/80 mr-1">كود الطالب</label>
            <input type="text" placeholder="أدخل كودك هنا..." 
              className="w-full bg-[#1a120b] border border-[#d4af37]/30 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d4af37] transition-all text-white text-right" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#d4af37]/80 mr-1">كلمة المرور</label>
            <input type="password" placeholder="••••••••" 
              className="w-full bg-[#1a120b] border border-[#d4af37]/30 rounded-lg py-3 px-4 focus:outline-none focus:border-[#d4af37] transition-all text-white text-right" />
          </div>

          <button className="w-full bg-gradient-to-r from-[#8b5e34] to-[#634832] text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
            دخول للمنصة
          </button>
        </div>
      </div>
    </div>
  );
}

