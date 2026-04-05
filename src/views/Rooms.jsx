
//from test
import data_rooms from '@/test/data_room.json'
import { useState } from 'react'

export const Rooms = () => {
    const [isShowModal, setIsShowModal] = useState(false)
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
                                                onClick={() => setIsShowModal(true)}
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

            {isShowModal && <div id="authentication-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">

                    <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">

                        <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                            <h3 className="text-lg font-medium text-heading">
                                Sign in to our platform
                            </h3>
                            <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form action="#" className="pt-4 md:pt-6">
                            <div className="mb-4">
                                <label for="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                                <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
                            </div>
                            <div>
                                <label for="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                                <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                            </div>
                            <div className="flex items-start my-6">
                                <div className="flex items-center">
                                    <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                                    <label for="checkbox-remember" className="ms-2 text-sm font-medium text-heading">Remember me</label>
                                </div>
                                <a href="#" className="ms-auto text-sm font-medium text-fg-brand hover:underline">Lost Password?</a>
                            </div>
                            <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                            <div className="text-sm font-medium text-body">Not registered? <a href="#" className="text-fg-brand hover:underline">Create account</a></div>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    )
}