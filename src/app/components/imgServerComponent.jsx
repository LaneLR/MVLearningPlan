export default async function RenderImage() {
  const res = await fetch(`https://meme-api.com/gimme`);
  const data = await res.json();

  return <img src={data.url} alt="an image" style={{width: '300px', height: '300px'}} />;
}
