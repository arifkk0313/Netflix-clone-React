import React,{useEffect,useState} from "react";
import "./rowpost.css";
import axios from '../../axios';
import { ImageUrl ,API_KEY} from "../../constanse/constanse";
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response);
            setMovies(response.data.results)

        }).catch((err)=>{
            // alert('network error')
        })
    }, [])
  const opts = {
      height : '390',
      width : '100%',
      playervars: {
        autoplay:1
      },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }else{
            console.log('trailer not available')
        }
    })

  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                  <img onClick={()=>handleMovie(obj.id)}
                  className={props.isSmall ? 'smallposter' : "poster"}
                  src={`${ImageUrl+obj.backdrop_path}`}
                  alt="poster"
                />
            )}
        
          
        </div>
        { urlId && <Youtube opts={opts}  videoId={urlId.key}/>}
    </div>
  );
}

export default Rowpost;
