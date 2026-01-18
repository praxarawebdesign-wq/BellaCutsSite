export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      success: true,
      message: "This is a dummy endpoint and does not store submissions.",
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
