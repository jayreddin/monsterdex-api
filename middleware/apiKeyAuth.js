
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.get('ws_9RXQJYpk352F9XjDMOB5I0yFBmLG7hXA');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid API Key' });
  }
  next();
};

module.exports = apiKeyAuth;
