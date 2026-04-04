import { useSelector, useDispatch } from "react-redux"


//from action redux
import { increment, decrement } from "@/redux/actions/test"

//from i18n
import { useTranslation } from "react-i18next"

//from asset/image
import banner from '@/assets/images/banner.png'

export const Home = () => {


    return (
        <main className="pt-20">
            <section id="page-home" className="page">
                <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={banner} alt="Núi cấm" className="w-full h-full object-cover brightness-50" />
                    </div>
                    <div className="relative text-center text-white px-4 max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-i18n="hero_title">Chạm vào mây trời vùng Thất Sơn</h1>
                        <p className="text-xl mb-8 opacity-90" data-i18n="hero_subtitle">Tìm về bình yên giữa núi rừng An Giang.</p>
                        <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-xl font-bold transition" data-i18n="btn_check_availability">Kiểm tra phòng</button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-20 px-4">
                    <div className="text-center mb-12">
                        <span className="text-amber-700 font-bold uppercase tracking-widest text-sm" data-i18n="about_tag">Khám phá An Giang</span>
                        <h2 className="text-4xl font-bold mt-4" data-i18n="explore_preview_title">Trải nghiệm không thể bỏ lỡ</h2>
                    </div>
                    <div id="explore-grid" className="grid md:grid-cols-4 gap-6"></div>
                </div>
            </section>
        </main>
    )
}