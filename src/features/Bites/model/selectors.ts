import { StateType } from 'lib/store'

export const bitesData = (state: StateType) => state.bites
export const bites = (state: StateType) => state.bites.bites
export const bite = (state: StateType) => state.bites.bite
export const loadingBites = (state: StateType) => state.bites.loadingBites
export const loadingComment = (state: StateType) => state.bites.loadingComment
export const offset = (state: StateType) => state.bites.offset
export const haveMoreBites = (state: StateType) => state.bites.haveMoreBites
