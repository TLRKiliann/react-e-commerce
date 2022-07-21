import beach from '/imgs/wall_beach1.jpg';


export function About() {
  return (
    <div className="about--main">
      <h1>About</h1>
      
      <img className="img--about" src={beach} alt="beach" />
    
      <section className="section--about">
        <h3>Hello Title</h3>
        <p>my articile</p>

      </section>
    </div>
  )
}