import { SearchFilter } from "./SearchFilter/SearchFilter"
import { UserList } from "./UserList/UserList"
import { UserSearch } from "./UserSearch/UserSearch"

const App = () => {

  return (
    <div className="w-full h-screen sm:w-1/2 md:w-full lg:w-1/2 sm:h-auto mx-auto">
      <section className="mx-auto bg-gray-900 px-6 py-16 lg:px-10 w-full h-screen sm:h-auto ">
        <h1 className="text-4xl font-semibold text-white tracking-tight">
          User Directory
        </h1>
        <div className="w-full lg:w-2/3 sm:prmx-autoflex flex-wrap gap-4 justify-between">
          <UserSearch />
          <SearchFilter />
        </div>
        <UserList />
      </section>
    </div>
  )
}

export default App
