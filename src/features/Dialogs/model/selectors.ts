import { StateType } from 'lib/store/store';
export const dialogs = (state: StateType) => state.dialogs.dialogs
export const currentDialog = (state: StateType) => state.dialogs.currentDialog
export const messages = (state: StateType) => state.dialogs.messages