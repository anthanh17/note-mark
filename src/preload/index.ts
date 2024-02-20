/*
có nhiệm vụ chạy trong quá trình render process trước khi web page được tạo, và có thể tương tác với các module Node.js và API của Electron trước khi nó được tải lên trong quá trình render.
*/

import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (error) {
  console.error(error)
}
