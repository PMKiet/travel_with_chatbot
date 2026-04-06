
export const SideBarForAdminPage = () => {
    return (
        <section id="page-admin-dashboard" class="page hidden">
            <div class="flex flex-col md:flex-row">

                <div class="w-full md:w-64 bg-stone-900 text-white admin-sidebar p-6 flex flex-col gap-4">
                    <div class="text-stone-400 text-xs uppercase font-bold mb-2">Quản lý hệ thống</div>
                    <button onclick="switchAdminTab('stats')" class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-stats">
                        <i data-lucide="bar-chart-3"></i> Thống kê
                    </button>
                    <button onclick="switchAdminTab('rooms')" class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-rooms">
                        <i data-lucide="layout-grid"></i> Quản lý phòng
                    </button>
                    <button onclick="switchAdminTab('bookings')" class="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-800 transition" id="tab-btn-bookings">
                        <i data-lucide="clipboard-list"></i> Đặt phòng
                    </button>
                    <div class="mt-auto border-t border-stone-800 pt-4">
                        <button onclick="logoutAdmin()" class="flex items-center gap-3 p-3 rounded-xl hover:bg-red-900/30 transition text-red-400 w-full">
                            <i data-lucide="log-out"></i> Đăng xuất
                        </button>
                    </div>
                </div>

                <div class="flex-1 p-8 bg-stone-50 overflow-y-auto admin-sidebar">
                    <div id="admin-tab-stats" class="admin-tab">
                        <h2 class="text-2xl font-bold mb-8">Tổng quan doanh thu</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div class="text-stone-500 text-sm mb-1">Tổng doanh thu</div>
                                <div class="text-3xl font-bold text-green-700" id="stat-revenue">0đ</div>
                            </div>
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div class="text-stone-500 text-sm mb-1">Tổng đơn đặt</div>
                                <div class="text-3xl font-bold" id="stat-count">0</div>
                            </div>
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                                <div class="text-stone-500 text-sm mb-1">Phòng đang trống</div>
                                <div class="text-3xl font-bold text-amber-600" id="stat-available-rooms">0</div>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                            <h3 class="font-bold mb-4">Lịch sử đặt phòng mới nhất</h3>
                            <div id="recent-activity-list" class="space-y-4"></div>
                        </div>
                    </div>

                    <div id="admin-tab-rooms" class="admin-tab hidden">
                        <div class="flex justify-between items-center mb-8">
                            <h2 class="text-2xl font-bold">Danh sách phòng</h2>
                            <button class="px-4 py-2 bg-stone-800 text-white rounded-lg flex items-center gap-2">
                                <i data-lucide="plus"></i> Thêm phòng
                            </button>
                        </div>
                        <div class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-stone-100 text-sm uppercase">
                                    <tr>
                                        <th class="p-4">Phòng</th>
                                        <th class="p-4">Giá / Đêm</th>
                                        <th class="p-4">Trạng thái</th>
                                        <th class="p-4">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody id="admin-room-table-body"></tbody>
                            </table>
                        </div>
                    </div>

                    <div id="admin-tab-bookings" class="admin-tab hidden">
                        <div class="flex justify-between items-center mb-8">
                            <h2 class="text-2xl font-bold">Danh sách đơn đặt phòng</h2>
                            <button onclick="exportBookings()" class="px-4 py-2 border border-stone-300 rounded-lg flex items-center gap-2 hover:bg-white transition text-sm">
                                <i data-lucide="download" class="w-4 h-4"></i> Xuất File JSON
                            </button>
                        </div>
                        <div class="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="bg-stone-100 text-sm uppercase">
                                    <tr>
                                        <th class="p-4">Khách hàng</th>
                                        <th class="p-4">Phòng</th>
                                        <th class="p-4">Ngày</th>
                                        <th class="p-4">Tổng tiền</th>
                                        <th class="p-4">Trạng thái</th>
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