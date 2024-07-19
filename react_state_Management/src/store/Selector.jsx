import { selector } from "recoil";
import { countAtom } from "./atom/count";

export const EvenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom)
        return count%2==0;
    }
})
