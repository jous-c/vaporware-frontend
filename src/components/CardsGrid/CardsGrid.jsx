import CardMedium from "../../components/CardMedium/CardMedium.jsx";
import CardSmall from "../../components/CardSmall/CardSmall.jsx";
import CardLarge from "../../components/CardLarge/CardLarge.jsx";

const CardsGrid = ({ snippetsData }) => {

        const chunkSize = 9;
        const chunks = [];
    
        for (let i = 0; i < snippetsData.length; i += chunkSize) {
          const chunk = snippetsData.slice(i, i + chunkSize);
          chunks.push(chunk);
        }
      //timeout blur
        return (
    
          <main>
            {chunks.map((chunk, index) => (
              <div className="main-container">
                <section key={snippetsData.id} className="container-large">
                  <div className="row-2items">
                    <div className="column-2items">
    
                      {chunk[0] && <CardSmall chunkData={chunk[0]} />}
                      {chunk[1] && <CardSmall chunkData={chunk[1]} />}
                    </div>
    
                    {chunk[8] && <CardLarge chunkData={chunk[8]}/>}
                  </div>
                  <div className="row-3items">
                    {chunk[2] && <CardMedium chunkData={chunk[2]} />}
                    {chunk[3] && <CardMedium chunkData={chunk[3]} />}
                    {chunk[4] && <CardMedium chunkData={chunk[4]} />}
                
                  </div>
                </section>
                <section className="container-small">
                  <div className="column-4items">
                    {chunk[5] && <CardSmall chunkData={chunk[5]} />}
                    {chunk[6] && <CardSmall chunkData={chunk[6]} />}
                    {chunk[7] && <CardSmall chunkData={chunk[7]} />}
                  </div>
                </section>
              </div>
            ))}
          </main>
        );
      };


export default CardsGrid;