//interfaces
interface Props {
    title: string,
    label1: string,
    label2: string,
    label3: string,
}

const IndexTable = ({title, label1, label2, label3}: Props) => {
    return (
        <div className="max-w-md m-auto grid grid-cols-3 gap-2 py-8">
            <div className="i_tbl_header col-span-3">
                <h3 className="subtitle_2">{title}</h3>
            </div>
            <div className="i_tbl_td i_tbl_td_1">
                <p>{label1}</p>
            </div>
            <div className="i_tbl_td i_tbl_td_2">
                <p>{label2}</p>
            </div>
            <div className="i_tbl_td i_tbl_td_3">
                <p>{label3}</p>
            </div>
        </div>
    )
}

export default IndexTable