import { useState, useEffect } from "react"
import { useUserStore } from "../Utils/useUserStore"
import { Spinner } from "../Spinner/Spinner"

export const UserList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const fetchUsers = useUserStore(store => store.fetchUsers)
    const filteredList = useUserStore(store => store.filteredUsers)

    useEffect(() => {
        setTimeout(() => {
            fetchUsers()
            setIsLoading(false)
        }, 1500)
    }, [fetchUsers])
  
    return isLoading ? <Spinner/> : (
        <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="min-w-full lg:w-1/2 mx-auto table-auto border-collapse rounded-2xl bg-white text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                    <tr>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">ID</th>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Name</th>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Email</th>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((user, idx) => (
                        <tr
                            key={user.id}
                            className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100 transition-colors'}
                        >
                            <td className="px-2 py-2 sm:px-6 sm:py-4 font-medium text-gray-900">{user.id}</td>
                            <td className="px-1 py-2 sm:px-6 sm:py-4">{user.name}</td>
                            <td className="px-2 py-2 sm:px-6 sm:py-4">{user.email}</td>
                            <td className="px-4 py-2 sm:px-6 sm:py-4">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}