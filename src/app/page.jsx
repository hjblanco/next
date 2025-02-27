import Carta from "@/components/Carta";

export default async function Home() {
  const respuesta = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}&per_page=40`)
  const datos = await respuesta.json();
  console.log(datos)
  return (
    <>
      <div className="columns-5 gap-1">
        {
          datos.map(
            (dato, index) => (
              <Carta url={dato.urls.regular} key={index}/>
            )
          )
        }
      </div>
    </>
  );
}