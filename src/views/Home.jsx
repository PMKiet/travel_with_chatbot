import { useSelector, useDispatch } from "react-redux"


//from action redux
import { increment, decrement } from "@/redux/actions/test"

//from i18n
import { useTranslation } from "react-i18next"

//from react route
import { Link } from "react-router-dom"

//from asset/image
import banner from '@/assets/images/banner.png'
import explore1 from '@/assets/images/explore1.jpeg'
import explore2 from '@/assets/images/explore2.jpeg'
import explore3 from '@/assets/images/explore3.jpeg'
import explore4 from '@/assets/images/explore4.jpeg'

//from test
import exploreData from '@/test/data_explore.json'

export const Home = () => {


    return (

        <>
            <section id="page-home" className="page" >
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

                {/* explore */}
                <div className="max-w-7xl mx-auto py-20 px-4">
                    <div className="text-center mb-12">
                        <span className="text-amber-700 font-bold uppercase tracking-widest text-sm" data-i18n="about_tag">Khám phá An Giang</span>
                        <h2 className="text-4xl font-bold mt-4" data-i18n="explore_preview_title">Trải nghiệm không thể bỏ lỡ</h2>
                    </div>
                    <div id="explore-grid" className="grid md:grid-cols-4 gap-6">
                        {
                            exploreData && exploreData.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/explore/${item.id}`}
                                    className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={item.thumb}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
                                    >
                                        <h4
                                            className="text-white font-bold text-lg"
                                        >
                                            {item.title_vi}
                                        </h4>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section >
        </>
    )
}