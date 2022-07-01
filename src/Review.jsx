

export default function Review({id,name,job,image,text}) {

  return (
    <div className="review">Review
        <div className="img-container">
            <img src={image} alt="name" />
        </div>
        <h4>{name}</h4>
        <h3>{job}</h3>
        <p>{text}</p>
        <p className="info">{text}</p>
    </div>
  )
}
