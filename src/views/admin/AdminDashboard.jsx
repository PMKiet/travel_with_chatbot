
export const AdminDashboard = () => {
    return (

        <section id="page-admin-dashboard" className="page">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 bg-stone-900 text-white admin-sidebar p-6 flex flex-col gap-4">
                    <div className="text-stone-400 text-xs uppercase font-bold mb-2">Quản lý hệ thống</div>
                    <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-stats">
                        <i data-lucide="bar-chart-3"></i> Thống kê
                    </button>
                    <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-rooms">
                        <i data-lucide="layout-grid"></i> Quản lý phòng
                    </button>
                    <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-bookings">
                        <i data-lucide="clipboard-list"></i> Đặt phòng
                    </button>
                    <div className="mt-auto border-t border-stone-800 pt-4">
                        <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-900/30 transition text-red-400 w-full">
                            <i data-lucide="log-out"></i> Đăng xuất
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-8 bg-stone-50 overflow-y-auto admin-sidebar">
                    <div id="admin-tab-stats" className="admin-tab">
                        <h2 className="text-2xl font-bold mb-8">Tổng quan doanh thu</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div className="text-stone-500 text-sm mb-1">Tổng doanh thu</div>
                                <div className="text-3xl font-bold text-green-700" id="stat-revenue">0đ</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div className="text-stone-500 text-sm mb-1">Tổng đơn đặt</div>
                                <div className="text-3xl font-bold" id="stat-count">0</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div className="text-stone-500 text-sm mb-1">Phòng đang trống</div>
                                <div className="text-3xl font-bold text-amber-600" id="stat-available-rooms">0</div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h3 className="font-bold mb-4">Lịch sử đặt phòng mới nhất</h3>
                            <div id="recent-activity-list" className="space-y-4"></div>
                        </div>
                    </div>

                    <div id="admin-tab-rooms" className="admin-tab hidden">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">Danh sách phòng</h2>
                            <button className="px-4 py-2 bg-stone-800 text-white rounded-lg flex items-center gap-2">
                                <i data-lucide="plus"></i> Thêm phòng
                            </button>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-stone-100 text-sm uppercase">
                                    <tr>
                                        <th className="p-4">Phòng</th>
                                        <th className="p-4">Giá / Đêm</th>
                                        <th className="p-4">Trạng thái</th>
                                        <th className="p-4">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-room-table-body"></tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-tab-bookings" className="admin-tab hidden">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">Danh sách đơn đặt phòng</h2>
                            <button className="px-4 py-2 border border-stone-300 rounded-lg flex items-center gap-2 hover:bg-white transition text-sm">
                                <i data-lucide="download" className="w-4 h-4"></i> Xuất File JSON
                            </button>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-stone-100 text-sm uppercase">
                                    <tr>
                                        <th className="p-4">Khách hàng</th>
                                        <th className="p-4">Phòng</th>
                                        <th className="p-4">Ngày</th>
                                        <th className="p-4">Tổng tiền</th>
                                        <th className="p-4">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-booking-table-body"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}