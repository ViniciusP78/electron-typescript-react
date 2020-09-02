import { ipcRenderer } from 'electron'

export const fireEvent = async () => {
  let track = await ipcRenderer.invoke('open-track');
}