import { useEffect } from "react"

const useTitleCount = (count) => {
    useEffect(() => {
        console.log("I Am First One");
        document.title = `Chats ${count}`;
    }, [count]);
}
export default useTitleCount;