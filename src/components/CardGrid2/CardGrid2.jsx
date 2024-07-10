import "../CardGrid2/CardGrid2.scss"
import VideoCard from "../VideoCard/VideoCard.jsx"

const CardsGrid2 = ({ playlistData }) => {

    if (!playlistData || playlistData.length === 0) {
        return <div> <h2 className="loading-text"> Digging through your old folders... </h2></div>; // Or any other loading indicator 
      }
    
      const chunkSize = 9;
      const chunks = [];
    
      for (let i = 0; i < playlistData[0].file.length; i += chunkSize) {
        const chunk = playlistData[0].file.slice(i, i + chunkSize);
        chunks.push(chunk);
        
      }

      console.log(playlistData[0].file);
      console.log(chunks)
    
    return(
        <>
        <main> 

            {chunks.map((chunk, index) => (
                 <div className="library-container" key={index}>
                 <section className="container-large">
                   <div className="row-2items">
                     <div className="column-1item-left">
                       {chunk[0] && <VideoCard playlistChunk={chunk[0]} />}
                     </div>
                    <div className="column-1tem-right">
                     {chunk[3] && <VideoCard playlistChunk={chunk[3]} />}
                    </div>
                   </div>
                   <div className="row-3items">
                   {chunk[1] && <VideoCard playlistChunk={chunk[1]} />}
                   {chunk[2] && <VideoCard playlistChunk={chunk[2]} />}
                   </div>
                   
                 </section>
                 <section className="container-small">
                   <div className="column-4items">
                   {chunk[6] && <VideoCard playlistChunk={chunk[6]} />}
                   {chunk[4] && <VideoCard playlistChunk={chunk[4]} />}
                   {chunk[8] && <VideoCard playlistChunk={chunk[8]} />}
                   </div>
                 </section>
               </div>
            ))}
        </main>
        </>
    )
}

export default CardsGrid2