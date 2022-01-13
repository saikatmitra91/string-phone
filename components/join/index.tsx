import { useHMSActions } from "@100mslive/hms-video-react"
import { FormEventHandler, useEffect, useRef } from "react"

export type JoinProps = {
    state: string
}

const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjE0YWZmOGY1YWExODRiMzEwYmM4NjFlIiwicm9vbV9pZCI6IjYxNGIwMzI2NWFhMTg0YjMxMGJjODYyMSIsInVzZXJfaWQiOiI2MTRhZmY4ZjVhYTE4NGIzMTBiYzg2MWEiLCJyb2xlIjoiaG9zdCIsImp0aSI6ImI3MjRhNWExLTEwMGMtNDQ1NS1hNGQ1LTEzNzYyOWNjZmZiOCIsInR5cGUiOiJhcHAiLCJ2ZXJzaW9uIjoyLCJleHAiOjE2NDIxNTYwNTN9.W_uUtZpR_z0tTTxnXbHhWY_5Ubid8cA9J3USA3jIvcY'

function Join(props: JoinProps){
    const { state } = props
    const actions = useHMSActions()
    const inputEl = useRef(null)
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        const elem = inputEl.current
        if (elem) {
            const userName = (elem as HTMLInputElement).value
            actions.join({
                userName,
                authToken
            })
        }
    }

    useEffect(() => {
        window.onunload = () => {
          actions.leave();
        };
    }, [actions]);
    return (
        <form className="text-center my-5" onSubmit={handleSubmit}>
            <input id="userName" type="text" name="user-name" placeholder="User Name" className="rounded-l-md p-3" ref={inputEl}/>
            <button type="submit" className="dark:text-white dark:bg-red-600 py-3 px-6 rounded-r-md text-center" id="join-btn">Join</button>
        </form>
    )
}

export default Join