import { create } from "zustand"
import { UserStoreType, ResType, RoleTypes } from "../Types/UserDirTypes"
import { fetchUsers } from "./Utils"

export const useUserStore = create<UserStoreType>((set, get) => ({
    users: [],
    searchTerm: "",
    roleFilter: "",
    filteredUsers: [],
    fetchUsers: async () => {
        const response: ResType = await fetchUsers("/api/users")

        if(response.ok) {
            const data = await response.json()
            if(Array.isArray(data)) {
                set({users: data})
                set({filteredUsers: data})
            } else { console.log("Data err") }
        } else { console.log("API err") }
    },
    setSearchTerm: (term: string) => {
        set({ searchTerm: term})
        get().applyFilters()
        
    },
    setRoleFilter: (filter: RoleTypes) => {
        set({roleFilter: filter})
        get().applyFilters()
    },
    applyFilters: () => {
        const { users, roleFilter, searchTerm} = get()

        const filteredData = users.filter(user => {
            const matchesSearch = searchTerm ? Object.values(user).some(value => 
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            ) : true //don't filter if no search term

            const matchesRole = roleFilter ? user.role.toLowerCase() === roleFilter.toLowerCase() : true

            return matchesSearch && matchesRole
        })

        set({filteredUsers: filteredData})

    }
}))






// setSelectedFilter: (filter: RoleTypes) => {
//     set({ roleFilter: filter})

//     const users = get().users
//     const filtered = filter
//     ? users.filter(user => 
//         Object.values(user).some(value =>
//             String(value).toLowerCase().includes(filter.toLowerCase())
//         )
//     )
//     : users
// set({ filteredUsers: filtered})
// }