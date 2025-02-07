/* eslint-disable react/prop-types */
import image from "../assets/news.jpg"
const NewsCard = ({title , description , src ,url}) => {
  return (
    <div className="card bg-dark text-white " style={{width:'300px', height:'400px'}}>
      <img src={src?src:image} className="card-img-top" style={{width:'300px', height:'200px'}}/>
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0,50):''}</h5>
        <p className="card-text">
         {description?description.slice(0,90):""}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
