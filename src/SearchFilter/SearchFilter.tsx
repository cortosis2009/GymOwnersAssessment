import { useState } from "react"
import { useUserStore } from "../Utils/useUserStore"
import { RoleTypes } from "../Types/UserDirTypes"

export const SearchFilter = () => {
    const roles: RoleTypes[] = ["admin", "editor", "viewer"]
    const [selectedRole, setSelectedRole] = useState<RoleTypes>("")
    const setSearchFilter = useUserStore(store => store.setRoleFilter)

    const handleFilterChange = (filter: RoleTypes) => {
        setSelectedRole(filter)
        setSearchFilter(filter)
    }

    return (
        <>
            <select                 
                className="w-1/2 sm:w-1/4 mt-1 h-14 rounded-lg border border-gray-300 my-6 p-4 text-lg text-black transition 
                    placeholder:text-gray-500 focus:ring-4 focus:ring-blue-300 md:flex-1 bg-white lg:mx-6"
                onChange={(e) => handleFilterChange(e.target.value as RoleTypes)}
                value={selectedRole}
            >
                <option value="">Filter by role</option>
                {roles.map((role: RoleTypes) => (
                    <option key={role} value={role}>{role}</option>
                ))}
            </select>
        </>
    )
}