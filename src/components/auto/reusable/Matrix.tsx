//interfaces
import { ITable, ITableData } from "@/utils/interfaces/types"

interface Props {
    table: ITable,
    scale: number, // 0 = 1-3, 1 = 1-5
}

const colors = {
    '1': 'i_tbl_td_1',
    '2': 'i_tbl_td_2',
    '3': 'i_tbl_td_3',
}

const Matrix = ({ table, scale }: Props) => {
    const calculateColor = (value: number) => {
        if (scale === 0) {
            if (value === 1) return colors['1']
            if (value === 2) return colors['2']
            return colors['3']
        }
        return calculateTotal(value)
    }

    const calculateSostenibilidad = (value: number) => {
        if(scale === 0) {
            if(value < 4) return colors['1']
            if(value < 7) return colors['2']
            return colors['3']
        }
        return calculateTotal(value)
    }

    const calculateCongruencia = (value: number) => {
        if(scale === 0) {
            if(value < 13) return colors['1']
            if(value < 19) return colors['2']
            return colors['3']
        }
        return calculateTotal(value)
    }

    const calculateTotal = (value: number) => {
        if(value < 59) return colors['1']
        if(value < 79) return colors['2']
        return colors['3']
    }

    //get percentage of change
    const getPercentage = (num: number, tot: number) => tot === 0 ? 0 : num / tot * 100

    //get percentage of change text
    const getPercentageTxt = (num: number, tot: number) => getPercentage(num, tot).toFixed(2)

    return (
        <div className="max-w-5xl m-auto w-full overflow-x-scroll">
            <table className="border-separate border-spacing-1 min-w-[1000px]">
                <thead>
                    <tr>
                        <th className="w-4"/>
                        <th/>
                        <th colSpan={3} className="m_tbl_header">Dimensiones</th>
                        <th/>
                        <th/>
                        <th/>
                    </tr>
                    <tr>
                        <th/>
                        <th/>
                        <th className="m_tbl_header">Generación y distribuición de riqueza</th>
                        <th className="m_tbl_header">Ética y transparencia</th>
                        <th className="m_tbl_header">Calidad de vida</th>
                        <th/>
                        <th className="m_tbl_header">Índice de sostenibilidad (max: {scale === 0 ? '9' : '100'})</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {table.data.map((item: ITableData, index: number) => (
                        <tr key={index}>
                            {index === 0 && (<td rowSpan={table.data.length} className="m_tbl_header text-center"><p className="relative -rotate-90">Grupos de interés</p></td>)}
                            <td className="m_tbl_header min-w-[150px]">{item.stkh}</td>
                            {/* <td className={`m_tbl_td ${calculateColor(item.riqueza, item.riqueza_max)}`}>{item.riqueza}/{item.riqueza_max}</td>
                            <td className={`m_tbl_td ${calculateColor(item.etica, item.etica_max)}`}>{item.etica}/{item.etica_max}</td>
                            <td className={`m_tbl_td ${calculateColor(item.calidad, item.calidad_max)}`}>{item.calidad}/{item.calidad_max}</td> */}
                            <td className={`m_tbl_td w-[120px] sm:w-[160px] ${calculateColor(scale === 1 ? getPercentage(item.riqueza, item.riqueza_max!): item.riqueza)}`}>{scale === 1 ? getPercentageTxt(item.riqueza, item.riqueza_max!) : item.riqueza}</td>
                            <td className={`m_tbl_td w-[120px] sm:w-[160px] ${calculateColor(scale === 1 ? getPercentage(item.etica, item.etica_max!): item.etica)}`}>{scale === 1 ? getPercentageTxt(item.etica, item.etica_max!) : item.etica}</td>
                            <td className={`m_tbl_td w-[120px] sm:w-[160px] ${calculateColor(scale === 1 ? getPercentage(item.calidad, item.calidad_max!): item.calidad)}`}>{scale === 1 ? getPercentageTxt(item.calidad, item.calidad_max!) : item.calidad}</td>
                            <td/>
                            <td className={`m_tbl_td ${calculateSostenibilidad(scale === 1 ? getPercentage(item.sum_total, item.sum_total_max!): item.sum_total)}`}>{scale === 1 ? getPercentageTxt(item.sum_total, item.sum_total_max!) : item.sum_total}</td>
                            <td/>
                        </tr>
                    ))}
                    <tr>
                        <td/>
                        <td className="m_tbl_header">Índice de congruencia (max: {scale === 0 ? '24' : '100'})</td>
                        <td className={`m_tbl_td ${calculateCongruencia(scale === 1 ? getPercentage(table.sum_riqueza, table.sum_riqueza_max!): table.sum_riqueza)}`}>{scale === 1 ? getPercentageTxt(table.sum_riqueza, table.sum_riqueza_max!) : table.sum_riqueza}</td>
                        <td className={`m_tbl_td ${calculateCongruencia(scale === 1 ? getPercentage(table.sum_etica, table.sum_etica_max!): table.sum_etica)}`}>{scale === 1 ? getPercentageTxt(table.sum_etica, table.sum_etica_max!) : table.sum_etica}</td>
                        <td className={`m_tbl_td ${calculateCongruencia(scale === 1 ? getPercentage(table.sum_calidad, table.sum_calidad_max!): table.sum_calidad)}`}>{scale === 1 ? getPercentageTxt(table.sum_calidad, table.sum_calidad_max!) : table.sum_calidad}</td>
                        <td/>
                        <td className={`m_tbl_td ${calculateTotal(scale === 1 ? getPercentage(table.sum_total, table.sum_total_max!): table.sum_total)}`}>{scale === 1 ? getPercentageTxt(table.sum_total, table.sum_total_max!) : table.sum_total}</td>
                        <td className="m_tbl_header">Índice de bien común (max: 100)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Matrix