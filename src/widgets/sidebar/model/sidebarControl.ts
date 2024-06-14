import { create } from "zustand";

interface ISidebarStates{
    isActive: boolean
}

interface Actions{
    setSidebarActive:()=> void
}

export const SidebarStore = create<Actions & ISidebarStates>((set)=>({
    isActive: false,
    setSidebarActive: ()=> set((state)=> ({isActive: !state.isActive}))
}))