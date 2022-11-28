export default async (req, res) => {
   
    if (req.query.token === null || !req.query.slug) {
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
        title: req.query.uri
      },
      {
        maxAge: 60,
      }
    )
    res.redirect(`/${req.query.slug}`)
  }

//   export default async (req, res) => {
//     // Check the secret and next parameters
//     // This secret should only be known to this API route and the CMS
//     if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
//       return res.status(401).json({ message: 'Invalid token' })
//     }
  
//     // Fetch the headless CMS to check if the provided `slug` exists
//     // getPostBySlug would implement the required fetching logic to the headless CMS
//     const post = await getPostBySlug(req.query.slug)
  
//     // If the slug doesn't exist prevent preview mode from being enabled
//     if (!post) {
//       return res.status(401).json({ message: 'Invalid slug' })
//     }
  
//     // Enable Preview Mode by setting the cookies
//     res.setPreviewData({})
  
//     // Redirect to the path from the fetched post
//     // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
//     res.redirect(`/${req.query.uri}`)
//   }