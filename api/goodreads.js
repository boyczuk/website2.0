// Vercel serverless function — see api/_goodreads-lib.js for the actual fetch/parse logic
// (shared with the Vite dev-server middleware in vite.config.js).
import { fetchGoodreadsData } from './_goodreads-lib.js';

export default async function handler(req, res) {
    try {
        const data = await fetchGoodreadsData();
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        res.status(200).json(data);
    } catch (err) {
        res.status(502).json({ error: 'Failed to fetch Goodreads feed' });
    }
}
