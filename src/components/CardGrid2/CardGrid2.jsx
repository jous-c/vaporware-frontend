
const CardsGrid2 = () => {
    
    const chunkSize = 9;
    const chunks = [];

    for (let i = 0; i < snippetsData.length; i += chunkSize) {
      const chunk = snippetsData.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    return(
        <>

        </>
    )
}

export default CardsGrid2