import {create} from 'zustand';

export const baseStore = create((set) => ({

    //GUARDANDO ESTADO
    name: 'Jeffrey',

    //ESTADO QUE CAMBIA EL NOMBRE
    changeName: () => set((state) => ({ name: state.name = 'DevJeffey'})),
    //ESTADO QUE RESETEA EL NOMBRE
    disableName: () => set({name: 'Jeffrey'})
}))