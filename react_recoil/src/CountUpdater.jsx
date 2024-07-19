import { useSetRecoilState } from "recoil"
import { messagingAtom } from "./atoms"

const CountUpdater = () => {
    const setMessagingCount = useSetRecoilState(messagingAtom)
    return (
        <div>
            <button onClick={() => {
                setMessagingCount(c => c+1)
            }}>Increase Messaging count</button>
        </div>
    )
}
export default CountUpdater