import beach from '/imgs/wall_beach1.jpg';
import "./styles.css"

export function About() {
  return (
    <div className="about--main">
      <div>
        <h1 className="title--about">About</h1>
      </div>

      <img className="img--about" src={beach} alt="beach" />
      
      <div className="reorder--frame">
        <section className="section--about">
          <h3>Our mission :</h3>
          <p>Youpy ! My first e-commerce !!!</p>
        </section>
      </div>
    </div>
  )
}