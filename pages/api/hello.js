// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function hello(req, res) {
  
  const randmchars = await fetch('https://rickandmortyapi.com/api/character/1,2');
  const results = await randmchars.json(); 


  res.status(200).json({ name: 'Ro', results: results })


}
