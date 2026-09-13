// Shared by the Vercel serverless function (api/goodreads.js) and the Vite dev-server
// middleware (vite.config.js), so `npm run dev` and the deployed site behave the same way.
//
// Goodreads' public API was deprecated in 2020 and issues no new keys, but the per-shelf RSS
// feeds still work unauthenticated. They just don't send CORS headers, so the browser can't
// fetch them directly — this runs server-side instead.

const GOODREADS_USER_ID = process.env.GOODREADS_USER_ID || '196684027';

const ENTITY_MAP = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'" };

function decodeEntities(str) {
    return str.replace(/&(amp|lt|gt|quot|#39|apos);/g, (_, e) => ENTITY_MAP[e]);
}

function extractTag(block, tag) {
    const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
    if (!match) return '';
    return decodeEntities(match[1].replace('<![CDATA[', '').replace(']]>', '')).trim();
}

function parseItems(xml) {
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml))) {
        const block = match[1];
        items.push({
            title: extractTag(block, 'title'),
            link: extractTag(block, 'link'),
            author: extractTag(block, 'author_name'),
            imageUrl: extractTag(block, 'book_large_image_url') || extractTag(block, 'book_medium_image_url'),
            rating: Number(extractTag(block, 'user_rating')) || 0,
            dateRead: extractTag(block, 'user_read_at'),
        });
    }
    return items;
}

async function fetchShelf(shelf, perPage) {
    const url = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=${shelf}&sort=date_read&order=d&per_page=${perPage}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Goodreads feed responded ${response.status} for shelf ${shelf}`);
    const xml = await response.text();
    return parseItems(xml).slice(0, perPage);
}

export async function fetchGoodreadsData() {
    const recentlyRead = await fetchShelf('read', 5);
    return { recentlyRead };
}
