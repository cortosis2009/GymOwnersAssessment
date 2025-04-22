import { users } from "../MockData/UserData"
import { ResType } from "../Types/UserDirTypes"

export const fetchUsers = (url: string): Promise<ResType> => {
    return new Promise((res) => {
        if(url === "/api/users") {
            res({
                ok: true,
                json: () => Promise.resolve(users)
            })
        } else {
            res({
                ok: false,
                status: 404,
                json: () => Promise.resolve({error: "Not Found"})
            })
        }
    })
}