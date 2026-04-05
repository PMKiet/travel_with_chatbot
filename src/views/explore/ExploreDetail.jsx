
//from react-route-dom
import { useParams } from "react-router-dom"

//from test
import exploreData from '@/test/data_explore.json'

export const ExploreDetail = () => {

    const param = useParams()
    const [data_by_id] = exploreData.filter(item => item.id === param.id)
    // console.log(data_by_id);

    return (
        <section className=" py-12">
            <div className="max-w-5xl mx-auto px-4" >
                <button className="mb-8 flex items-center gap-2 text-stone-500 hover:text-stone-800 transition">
                    <i data-lucide="arrow-left"></i> <span data-i18n="btn_back">Quay lại</span>
                </button>
                <div id="explore-detail-content">
                    <img src={data_by_id.thumb} className="w-full h-[450px] object-cover rounded-3xl mb-8 shadow-2xl" />
                    <h1 className="text-5xl font-bold mb-6 text-[#2D5A27]">{data_by_id.title_vi}</h1>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">{data_by_id.detail_vi}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-800"><i data-lucide="calendar"></i>Lịch trình</h4>
                            <p className="text-slate-500 text-lg">{data_by_id.schedule_vi}</p>
                        </div>
                        <div className="bg-[#2D5A27]/5 p-8 rounded-3xl border border-[#2D5A27]/10">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#2D5A27]"><i data-lucide="info"></i>Lưu ý</h4>
                            <p className="text-slate-700 text-lg">{data_by_id.notes_vi}</p>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}