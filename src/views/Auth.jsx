import { useState } from "react"


//from react route
import { useNavigate } from "react-router-dom";

//from redux
import { useDispatch } from "react-redux";
import { login } from "@/redux/actions/authAction";

export const Auth = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        //có dữ liệu sẽ sửa lại
        if (username === "" || password === "") {
            alert('Tài khoản và mật khẩu không được để trống')
        } else {
            if (username === 'admin' && password === '1234') {

                dispatch(login({
                    user: {
                        id: 1,
                        role: 'admin'
                    }
                }))

                navigate('/admin/dashboard')
            }
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} id="page-admin-login" className="page py-20">
            <div className="max-w-md mx-auto px-4">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                    <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập Quản trị</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Tài khoản</label>
                            <input
                                type="text"
                                id="admin-user"
                                placeholder="admin"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4A7856]"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Mật khẩu</label>
                            <input
                                type="password" id="admin-pass"
                                placeholder="1234"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4A7856]"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-3 btn-primary rounded-lg font-bold mt-4">Đăng nhập</button>
                        <p id="login-err" className="text-red-500 text-sm hidden">Thông tin đăng nhập không chính xác!</p>
                    </div>
                </div>
            </div>
        </form>
    )
}