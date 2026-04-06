
export const Button = ({ text, r_type }) => {
    const type = {
        no_outline: ""
    }

    return (
        <button className={`${type[r_type]}`}>{text}</button>
    )
}