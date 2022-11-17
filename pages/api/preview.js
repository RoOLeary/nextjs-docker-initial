export default async (req, res) => {
    if (req.query.token === null) {
      return res.status(401).json({ message: 'No preview token' })
    }
    if (req.query.uri === null) {
      return res.status(401).json({ message: 'No URI provided' })
    }
    res.setPreviewData(
      {
        token: req.query.token ?? null,
      },
      {
        maxAge: 60,
      }
    )
    res.redirect(`/${req.query.uri}`)
  }