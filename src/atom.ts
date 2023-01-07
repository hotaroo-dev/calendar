import { atom } from 'recoil'

export const dateState = atom({
  key: 'dateState',
  default: new Date(2023, 0, 1)
})

export const selectedState = atom({
  key: 'selectedState',
  default: [] as Date[]
})
