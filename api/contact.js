export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({
      success: true,
      message: "Thank you for your message! We're just a demo so nothing is submitted.",
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
