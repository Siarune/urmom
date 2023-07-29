import { defineConfig } from "vite"
import solid from "solid-start/vite"
import vercel from "solid-start-vercel"

export default defineConfig({
// @ts-ignore
	plugins: [solid({ adapter: vercel() })]
})
