const GAS_URL = 'https://script.google.com/macros/s/AKfycbzsAYlOdww4z4MBjiEtZvPgrn6_-wUvyy98niITt8y6INKgwOJBieRNhKidLVt_GFZHQg/exec';

module.exports = async (req, res) => {
  const type = req.query.type;
  if (!type) return res.status(400).json({ error: 'type required' });

  try {
    let gasRes;
    if (req.method === 'POST' || req.method === 'PUT') {
      gasRes = await fetch(`${GAS_URL}?type=${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
    } else {
      gasRes = await fetch(`${GAS_URL}?type=${type}`);
    }
    const data = await gasRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
