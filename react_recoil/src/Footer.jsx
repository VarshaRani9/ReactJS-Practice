/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil"
import { count, jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalCountSelector } from "./atoms"
import CountUpdater from "./CountUpdater"
import { useEffect, useMemo } from "react"
import axios from "axios"

const Footer = () => {

    // ? ASYNCHRONOUS DATA QUERIES

    const [networkCount, setNetworkCount] = useRecoilValue(count)
    const totalCount = useRecoilValue(totalCountSelector)
    
    // 1. ADQ ? ... not good way to do async task -> small flash in values, ugly code
    // useEffect(()=>{
    //     axios.get("<Backend url...>")
    //     .then(res => {
    //         setNetworkCount(res.data)
    //     })
    // },[])


    // ? RECOIL: ATOM & SELECTOR
    // const networkCount = useRecoilValue(networkAtom)
    // const jobsCount = useRecoilValue(jobsAtom)
    // const messagingCount = useRecoilValue(messagingAtom)
    // const notificationCount = useRecoilValue(notificationsAtom)

    // 1..
    // const totalCount = networkCount+jobsCount+messagingCount+notificationCount;

    // 2.. useMemo
    // const totalCount = useMemo(() => {
    //     return networkCount+jobsCount+messagingCount+notificationCount;
    // },[networkCount,jobsCount,messagingCount,notificationCount])

    // 3.. Selector
    // const totalCount = useRecoilValue(totalCountSelector)

    return (
        <div>
            <button>Home</button>

            {/* <button>My Network ({networkCount>=100 ? "99+" : networkCount})</button>
            <button>Jobs ({jobsCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button>Notification ({notificationCount})</button>
            <button>Me ({totalCount})</button> */}

            <button>My Network ({networkCount>=100 ? "99+" : networkCount})</button>
            {/* <button>Jobs ({jobsCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button>Notification ({notificationCount})</button>
            <button>Me ({totalCount})</button> */}

            <br /><br />
            <CountUpdater/>
        </div>
    )
}
export default Footer