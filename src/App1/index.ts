import { initApp } from '../utils/inject'
import { App1 } from './App1'

export * from './App1'

const htmlId = 'placeholder-2'
const elemContainerFromParent = document.getElementById(htmlId) as HTMLElement

if (elemContainerFromParent) {
	initApp(App1, elemContainerFromParent)
} else {
	console.warn(`[App2/index] no container w/ ID="${htmlId}"`)
}
