async function getPeso() {
  const res = await fetch('https://api.bluelytics.com.ar/v2/latest', { next: { revalidate: 3600 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 
{/*async function getRealGuara() {
  const res = await fetch('https://economia.awesomeapi.com.br/json/last/BRL-PYG', { next: { revalidate: 3600 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
*/}

export default async function Page() {
  const data1 = await getPeso()
  //const data2 = await getRealGuara()
  
  return  <div className="hidden tab:block">
            <div className="flex flex-col">
              <p>valor dolar blue</p>
              <p>{data1.blue.value_avg}</p>
            </div>
            {/*<div className="flex flex-col">
              <p>valor real/guarani</p>
              <p>{data2.BRLPYG.bid}</p>
            </div>*/}
          </div>

}




      
