const GAS_URL = 'https://script.google.com/macros/s/AKfycbzsAYlOdww4z4MBjiEtZvPgrn6_-wUvyy98niITt8y6INKgwOJBieRNhKidLVt_GFZHQg/exec';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  const type = req.query.type || '';

  try {
    let gasRes;

    if (req.method === 'GET') {
      gasRes = await fetch(`${GAS_URL}?type=${type}`, {
        redirect: 'follow'
      });
    } else {
      const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      gasRes = await fetch(`${GAS_URL}?type=${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        redirect: 'follow'
      });
    }

    const text = await gasRes.text();
    
    try {
      const json = JSON.parse(text);
      res.status(200).json(json);
    } catch {
      res.status(200).send(text);
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
