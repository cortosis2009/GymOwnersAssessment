import { useUserStore } from "../Utils/useUserStore"

export const UserSearch = () => {
    const setSearchTerm = useUserStore(store => store.setSearchTerm)

    const handleSearchChange = (term: string) => {
        setSearchTerm(term)
    }

    return (
        <>
            <input
                className="w-1/2 sm:w-1/4 mr-6 h-14 rounded-lg border border-gray-300 my-6 p-4 text-lg 
                    text-black transition placeholder:text-gray-500 focus:ring-4 focus:ring-blue-300 md:flex-1 bg-white"
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search users"
                type="text"
            />
      </>
    )
}