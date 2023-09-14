//interfaces
import { ITable, ITableData } from "@/utils/interfaces/types"

interface Props {
    table: ITable,
    scale: number, // 0 = 1-3, 1 = 1-5
}


const Matrix = ({ table, scale }: Props) => {
    const calculateColor = (value: number, max?: number) => {
        if (scale === 0) {
            if (value === 1) return 'i_tbl_td_1'
            if (value === 2) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }

        if (scale === 1) {
            if (value < max! / 3) return 'i_tbl_td_1'
            if (value < max! / 3 * 2) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }
    }

    const calculateSostenibilidad = (value: number, max?: number) => {
        if(scale === 0) {
            if(value < 4) return 'i_tbl_td_1'
            if(value < 7) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }

        if(scale === 1) {
            if(value < max! / 3) return 'i_tbl_td_1'
            if(value < max! / 3 * 2) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }
    }

    const calculateCongruencia = (value: number, max?: number) => {
        if(scale === 0) {
            if(value < 13) return 'i_tbl_td_1'
            if(value < 19) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }

        if(scale === 1) {
            if(value < max! / 3) return 'i_tbl_td_1'
            if(value < max! / 3 * 2) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }
    }

    const calculateTotal = (value: number, max?: number) => {
        if(scale === 0) {
            if(value < 59) return 'i_tbl_td_1'
            if(value < 79) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }

        if(scale === 1) {
            if(value < max! / 3) return 'i_tbl_td_1'
            if(value < max! / 3 * 2) return 'i_tbl_td_2'
            return 'i_tbl_td_3'
        }
    }

    return (
        <div className="max-w-5xl m-auto">
            <table className="border-separate border-spacing-1">
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
                        <th className="m_tbl_header">Índice de sostenibilidad {scale === 0 && '(max(: 9)'}</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {table.data.map((item: ITableData, index: number) => (
                        <tr key={index}>
                            {index === 0 && (<td rowSpan={table.data.length} className="m_tbl_header text-center"><p className="relative -rotate-90">Grupos de interés</p></td>)}
                            <td className="m_tbl_header min-w-[150px]">{item.stkh}</td>
                            <td className={`m_tbl_td ${calculateColor(item.riqueza, item.riqueza_max)}`}>{item.riqueza}</td>
                            <td className={`m_tbl_td ${calculateColor(item.etica, item.etica_max)}`}>{item.etica}</td>
                            <td className={`m_tbl_td ${calculateColor(item.calidad, item.calidad_max)}`}>{item.calidad}</td>
                            <td/>
                            <td className={`m_tbl_td ${calculateSostenibilidad(item.sum_total, item.sum_total_max)}`}>{item.sum_total}{scale === 1 && `/${item.sum_total_max}`}</td>
                            <td/>
                        </tr>
                    ))}
                    <tr>
                        <td/>
                        <td className="m_tbl_header">Índice de congruencia {scale === 0 && '(max(: 24)'}</td>
                        <td className={`m_tbl_td ${calculateCongruencia(table.sum_riqueza, table.sum_riqueza_max)}`}>{table.sum_riqueza}{scale === 1 && `/${table.sum_riqueza_max}`}</td>
                        <td className={`m_tbl_td ${calculateCongruencia(table.sum_etica, table.sum_etica_max)}`}>{table.sum_etica}{scale === 1 && `/${table.sum_etica_max}`}</td>
                        <td className={`m_tbl_td ${calculateCongruencia(table.sum_calidad, table.sum_calidad_max)}`}>{table.sum_calidad}{scale === 1 && `/${table.sum_calidad_max}`}</td>
                        <td/>
                        <td className={`m_tbl_td ${calculateTotal(table.sum_total, table.sum_total_max)}`}>{table.sum_total}{scale === 1 && `/${table.sum_total_max}`}</td>
                        <td className="m_tbl_header">Índice de bien común {scale === 0 && '(max(: 100)'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Matrix