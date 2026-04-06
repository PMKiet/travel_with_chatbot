
//from test
import data_rooms from '@/test/data_room.json'
import { useState } from 'react'

//from react icon
import { IoIosCloseCircleOutline } from "react-icons/io"

export const Rooms = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const [selectItem, setSelectItem] = useState({})

    const openModal = (item) => {
        setSelectItem(item)
        setIsShowModal(true)
    }

    const closeModal = () => {
        setSelectItem({})
        setIsShowModal(false)
    }

    return (
        <>
            <section className="page py-12 h-full">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12" >Hệ thống phòng nghỉ</h2>
                    <div id="full-rooms-list" className="grid md:grid-cols-3 gap-8">
                        {
                            data_rooms && data_rooms.map(room => (
                                <div
                                    key={room.id}
                                    className="bg-white rounded-3xl overflow-hidden card-shadow group"
                                >
                                    <div className="overflow-hidden h-64">
                                        <img src={`${room.image}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-bold text-xl leading-tight">{room.name_vi}</h3>
                                            <span className={`text-xs font-bold uppercase ${room.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
                                                {room.status === 'Available' ? '● Còn' : '● Hết'}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-[#2D5A27]">{room.price.toLocaleString()}</span>
                                            <button
                                                disabled={room.status !== "Available" ? "true" : ""}
                                                className="px-6 py-2 btn-primary rounded-xl font-bold text-sm disabled:opacity-50 disabled:scale-100 disabled:bg-stone-300"
                                                onClick={openModal(room)}
                                            >
                                                Đặt ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>


            {/* dat cho */}

            {
                isShowModal
                &&
                selectItem
                &&
                <div className='fixed bg-black/50 min-h-screen z-100 w-screen flex justify-center items-center top-0 left-0'>
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-stone-100">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-3xl font-bold mb-6" data-i18n="booking_title">Thông tin đặt phòng</h2>
                            <IoIosCloseCircleOutline
                                onClick={() => closeModal()}
                            />
                        </div>
                        <form id="booking-form">
                            <input type="hidden" id="booking-room-id" />
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2" data-i18n="form_name">Họ và tên *</label>
                                    <input type="text" id="cust-name" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#4A7856]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2" data-i18n="form_phone">Số điện thoại *</label>
                                    <input type="tel" id="cust-phone" required className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-[#4A7856]" />
                                </div>
                            </div>
                            <div id="booking-summary" className="bg-stone-50 p-6 rounded-2xl mb-8 border border-stone-100">
                                <h4 className="font-bold mb-2" data-i18n="summary_title">Tóm tắt dịch vụ</h4>
                                <div className="flex justify-between text-slate-600">
                                    <span id="summary-room-name">{selectItem.name_vi}</span>
                                    <span id="summary-room-price" className="font-bold text-green-700">{selectItem.price.toLocaleString()}</span>
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 btn-primary rounded-xl font-bold text-lg" data-i18n="btn_confirm_booking">Xác nhận đặt phòng</button>
                        </form>
                    </div>
                </div >
            }
        </>
    )
}