const CardHeader = (props) => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-0">{props.title}</h1>
            <h3 className="text-md mb-6 text-slate-400">{props.subTitle}</h3>
        </div>
    )
}
export default CardHeader