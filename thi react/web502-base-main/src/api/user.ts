import { ISignin, ISignup } from "../types/user"
import { instance } from "./instance"

export const signin = (pro: ISignin) => {
    return instance.post("/signin", pro)
}

export const signup = (pro: ISignup) => {
    return instance.post("/signup", pro)
}