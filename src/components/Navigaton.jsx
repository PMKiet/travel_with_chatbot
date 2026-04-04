//from react router
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

//from component
import { Button } from '@/components/Button'

//from react icon
import { LuUserCog } from "react-icons/lu";

const Navigation = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <nav className="fixed bg-white w-full z-50 glass-nav border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-10 h-10 eco-gradient rounded-xl flex items-center justify-center text-white">
                                <i data-lucide="mountain"></i>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-[#2D5A27]">Bảy Núi <span className="text-amber-700">Eco</span></span>
                        </div>

                        <div id="main-nav-links" className="hidden md:flex space-x-8 font-medium">
                            <NavLink to={"/"} className="text-nav-primary hover:text-[#4A7856] no-underline ransition">{t('nav_home')}</NavLink>
                            <NavLink to={"/rooms"} className="text-nav-primary hover:text-[#4A7856] no-underline transition">{t('nav_rooms')}</NavLink>
                            <NavLink to={"/explore"} className="text-nav-primary hover:text-[#4A7856] no-underline transition">{t('nav_explore')}</NavLink>
                            <NavLink to={"/contact"} className="text-nav-primary hover:text-[#4A7856] no-underline transition">{t('nav_contact')}</NavLink>
                        </div>

                        <div className="flex items-center gap-4">
                            <select id="lang-selector" onChange={(e) => changeLanguage('en')} className="bg-transparent text-sm border-none focus:ring-0 cursor-pointer font-bold">
                                <option value="vi" >VI</option>
                                <option value="en" >EN</option>
                            </select>
                            <NavLink to={'/auth'} className={'p-2 text-stone-400 hover:text-[#4A7856] transition'}>
                                <Button
                                    r_type={'no_outline'}
                                    text={<LuUserCog />}
                                />
                            </NavLink>
                            <Button
                                text={'Đặt ngay'}
                                r_type={'no_outline'}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation