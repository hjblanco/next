const { create } = require("zustand");

const userStore = create (
    (set) => ({
        usuario: null,
        loginUser: (user) => set(() => ({ usuario: user }))
    })
)

export default userStore;