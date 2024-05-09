import { create } from 'zustand';
import UserProps from '../userProps';

interface CurrentUserState {
  currentUser: Partial<UserProps> | null
  setCurrentUser: (user: UserProps) => void,
  setSideBar: (value: boolean)=>void
  sideBar: boolean;
}

const initialState = {
   currentUser : {
      name: "Anioke Sebastian",
      email: "aniokechukwudi8@gmail.com"
   },
   sideBar: false
}

const useCurrentUser = create<CurrentUserState>()((set) => ({
  ...initialState,
  setCurrentUser: (newUser) => set(() => ({ currentUser: newUser })),
  setSideBar: (value:boolean)=>set(()=>({sideBar: value}))
}))

export default useCurrentUser