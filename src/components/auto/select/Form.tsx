'use client'

//react
import { useEffect, useState } from "react"

//next
import { useRouter } from "next/navigation"

//components
import Button from "@/components/reusable/buttons/Button"
import Loader from "@/components/reusable/loader/Loader"

//redux
import { useSelector, useDispatch } from "react-redux"
import { selectUser, setReduxUser } from "@/app/GlobalRedux/Features/data/dataSlice"
import { selectShortResults, selectProfoundResults, setReduxShortResults, setReduxProfoundResults } from "@/app/GlobalRedux/Features/results/resultsSlice"

//interfaces
import { IUser, IResults } from "@/utils/interfaces/types"


const Form = () => {
    //redux
    const dispatch = useDispatch()
    const reduxUser: IUser | null = useSelector(selectUser)
    const reduxProfundResults: IResults[] = useSelector(selectProfoundResults)
    const reduxShortResults: IResults[] = useSelector(selectShortResults)

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false)

    //useState - short length
    const [shortLength, setShortLength] = useState<number>(0)

    //useState - profound length
    const [profoundLength, setProfoundLength] = useState<number>(0)

    //useEffect 
    useEffect(() => {
        verifyUser()
        verifyProfoundResults()
        verifyShortResults()
        setupNums()
    }, [reduxShortResults, reduxProfundResults])

    //setup numbers
    const setupNums = () => {
        setShortLength(reduxShortResults.length)
        setProfoundLength(reduxProfundResults.length)
    }

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

    //verify profound results
    const verifyProfoundResults = () => {
        if(reduxProfundResults.length === 0) {
            let temp: IResults[] = JSON.parse(localStorage.getItem('profound_results') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxProfoundResults(temp))
            }
        }
    }

    //verify short results
    const verifyShortResults = () => {
        if(reduxShortResults.length === 0) {
            let temp: IResults[] = JSON.parse(localStorage.getItem('short_results') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxShortResults(temp))
            }
        }
    }

    return (
        <div className="px-4 py-24">
            <div className="max-w-2xl m-auto">
                <h3 className="subtitle_2 mb-4">Tienes más análisis de autodiagnóstico que del protocolo. ¿Deseas realizar el autodiagnóstico o únicamente el protocolo?</h3>
                <div>
                    <p className="text">Análisis de autodiagnóstico: <span className="bold">{shortLength}</span></p>
                    <p className="text">Análisis de protocolo: <span className="bold">{profoundLength}</span></p>
                </div>
                <div className="pt-8 max-w-2xl m-auto grid sm:grid-cols-2 gap-4">
                    <Button text={'Empezar autodiagnóstico'} variant="filled" onClick={() => push('/auto/short')}/>
                    <Button text="Continuar con protocolo" variant="gradient" onClick={() => push('/auto/profound/select_stkhs')}/>
                </div>
                {loading && (<Loader/>)}
            </div>
        </div>
    )
}

export default Form