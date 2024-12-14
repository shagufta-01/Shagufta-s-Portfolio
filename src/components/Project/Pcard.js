
export default function pcard({details}){
    return(
  <figure class="snip1321">
  <img src={details.source} alt="project_image" />
  <figcaption>
    <h4> {details.title} </h4><br></br>
    <a href={details.link}>Know more</a>
  </figcaption>
</figure>
  
    )
}