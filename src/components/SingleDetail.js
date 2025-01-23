const SingleDetail = ({title, value}) => {

    return (
        <>
            <div> <span className="text-gray-300 font-thin">{title}:</span> <span>{value}</span> </div>
        </>
    )
}

export default SingleDetail;