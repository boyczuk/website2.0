import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fetchGoodreadsData } from './api/_goodreads-lib.js'

/** Serves /api/goodreads during `vite dev` so it behaves the same as the deployed Vercel function. */
function goodreadsDevApi() {
    return {
        name: 'goodreads-dev-api',
        configureServer(server) {
            server.middlewares.use('/api/goodreads', async (req, res) => {
                res.setHeader('Content-Type', 'application/json')
                try {
                    const data = await fetchGoodreadsData()
                    res.end(JSON.stringify(data))
                } catch (err) {
                    res.statusCode = 502
                    res.end(JSON.stringify({ error: 'Failed to fetch Goodreads feed' }))
                }
            })
        },
    }
}

export default defineConfig({
    plugins: [react(), goodreadsDevApi()],
})
