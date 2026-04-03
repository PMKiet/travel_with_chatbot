
export const Button = ({ text, r_type }) => {
    const type = {
        no_outline: "border-0 px-6 py-2.5 btn-primary rounded-full text-sm font-semibold"
    }

    return (
        <button className={`${type[r_type]}`}>{text}</button>
    )
}