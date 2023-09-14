'use client'

//react
import { useState, ChangeEvent } from "react"

//next
import { useRouter } from "next/navigation"

//components
import RadioCheck from "../reusable/inputs/RadioCheck"
import Button from "../reusable/buttons/Button"

//redux
import { useSelector, useDispatch } from "react-redux"
import { selectChecklist, setReduxChecklist } from "@/app/GlobalRedux/Features/data/dataSlice"

//constants
import { checklist, checklist_answers } from "@/utils/constants/checklist"

//interfaces
import { IChecklistItem } from "@/utils/interfaces/types"


const Form = () => {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //checklist
    const [checklistData, setCheckListData] = useState<IChecklistItem[]>(checklist)


    //handle select checklist
    const handleSelectChecklist = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        const newChecklist = [...checklistData].map((item) => {
            if (item.id === id) return { ...item, answer: Number(e.target.value)}
            return item
        })
        setCheckListData(newChecklist)
    }

    //handle save checklist
    const handleSaveChecklist = () => {
        console.log(checklistData)
        localStorage.setItem('checklist', JSON.stringify(checklistData))
        dispatch(setReduxChecklist(checklistData))
        push('/auto/short')
    }

    return (
        <div className="p-4">
            <div className="max-w-2xl m-auto">
                {/* header */}
                <div className="grid grid-cols-6 gap-4">
                    <div></div>
                    {checklist_answers.map((item, i) => (
                        <div key={i} className="flex_c_center text-center">
                            <p className="text mb-0">{item.answer}</p>
                        </div>
                    ))}
                </div>

                {/* body */}
                {checklistData.map((item, i) => (
                    <div key={i} className="grid grid-cols-6 gap-4 mt-4">
                        <div  className="flex_b_center ">
                            <p className="text bold">{item.title}</p>
                        </div>
                        <div className="col-span-5">
                            <RadioCheck answer={item} answers={checklist_answers} onChange={handleSelectChecklist}/>
                        </div>
                    </div>
                ))}
                <div className="mt-6">
                    <Button onClick={handleSaveChecklist} text="Continuar" variant='gradient'/>
                </div>
                
            </div>
        </div>
    )
}

export default Form