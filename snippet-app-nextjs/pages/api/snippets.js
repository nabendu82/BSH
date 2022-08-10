import { getSnippets } from '../../utils/Fauna';

export default async function handler(req, res) {
    if(req.method !== 'GET') {
        return res.status(405)
    }

    try {
        const snippets = await getSnippets();
        console.log(snippets)
        return res.status(200).json(snippets);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Something went wrong.'})
    }
}