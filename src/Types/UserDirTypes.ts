export type UserType = {
    id: string,
    name: string,
    email: string,
    role: RoleTypes
}

export type ResType = {
    ok: boolean,
    status?: 404 | 401 | 403 | 500 | 503,
    json: () => Promise<UserType[] | { error: string}> 
}

export type UserStoreType = {
    users: UserType[],
    searchTerm: string,
    roleFilter: RoleTypes,
    fetchUsers: () => Promise<void>,
    setSearchTerm: (term: string) => void,
    setRoleFilter: (filter: RoleTypes) => void,
    filteredUsers: UserType[],
    applyFilters: () => void
}

export type RoleTypes = "admin" | "editor" | "viewer" | ""