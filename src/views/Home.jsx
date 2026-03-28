import { useSelector, useDispatch } from "react-redux"


//from action redux
import { increment, decrement } from "@/redux/actions/test"

//from i18n
import { useTranslation } from "react-i18next"

export const Home = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const { t, i18n } = useTranslation()



    return (
        <>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('vi')}>Việt nam</button>

            <h2>{t('wellcome')}</h2>
            <h1>Count: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Tang</button>
            <button onClick={() => dispatch(decrement())}>Giam</button>

        </>
    )
}