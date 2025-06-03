import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
            <h1
  className="title font-semibold leading-[1.0714285714] tracking-[-0.005em] bg-clip-text text-transparent"
  style={{
    backgroundImage: "linear-gradient(108deg, rgb(8, 148, 255), rgb(201, 89, 221) 34%, rgb(255, 46, 84) 68%, rgb(255, 144, 4))",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    boxDecorationBreak: "clone",
  }}> Plan with Ritu</h1>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;