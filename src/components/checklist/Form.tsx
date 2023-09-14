'use client'

//react
import { useEffect, useState, ChangeEvent } from "react"

//next
import { useRouter } from "next/navigation"

//components
import RadioCheck from "../reusable/inputs/RadioCheck"
import Button from "../reusable/buttons/Button"
import Loader from "../reusable/loader/Loader"

//redux
import { useSelector, useDispatch } from "react-redux"
import { selectUser, setReduxChecklist, setReduxUser } from "@/app/GlobalRedux/Features/data/dataSlice"

//constants
import { checklist, checklist_answers } from "@/utils/constants/checklist"

//antd
import { message } from "antd"

//interfaces
import { IChecklistItem, IUser } from "@/utils/interfaces/types"


const Form = () => {
    //redux
    const dispatch = useDispatch()
    const reduxUser: IUser | null = useSelector(selectUser)

    //router
    const { push } = useRouter()

    //checklist
    const [checklistData, setCheckListData] = useState<IChecklistItem[]>(checklist)

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false)

    //useEffect 
    useEffect(() => {
        verifyUser()
    }, [])

    //verify user
    const verifyUser = () => {
        if (!reduxUser) {
            let temp: IUser | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
            if (temp) {
                dispatch(setReduxUser(temp))
                setLoading(false)
            } else push('/')
        }
    }

    //handle select checklist
    const handleSelectChecklist = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        const newChecklist = [...checklistData].map((item) => {
            if (item.id === id) return { ...item, answer: Number(e.target.value)}
            return item
        })
        setCheckListData(newChecklist)
    }

    //validate form
    const validateForm = () => {
        let flag = true
        checklistData.forEach(item => {
            if (item.answer === -1) flag = false
        })
        return flag
    }

    //handle save checklist
    const handleSaveChecklist = async () => {
        console.log(checklistData)

        if (!validateForm()) return message.error('Debes responder todas las preguntas')
            

        localStorage.setItem('checklist', JSON.stringify(checklistData))
        dispatch(setReduxChecklist(checklistData))
        try {
            setLoading(true)
            const res = await fetch('/api/users/checklist/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ checklist: checklistData, mail: reduxUser?.mail})
            })
            const data = await res.json()
            console.log(data)
            if(data.status === 200) {
                dispatch(setReduxUser({...reduxUser!, checklist: checklistData}))
                localStorage.setItem('user', JSON.stringify({...reduxUser!, checklist: checklistData}))
                setLoading(false)
                push('/auto/short')
            } else {
                message.error('Error al guardar los datos')
                setLoading(false)
            }
        } catch (error) {
            message.error('Error al guardar los datos')
            setLoading(false)
        }
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
                {loading && (<Loader/>)}
            </div>
        </div>
    )
}

export default Form