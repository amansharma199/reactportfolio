import "./blogFullPage.css"
import Posts from "../../blogData";
import { useHistory, useParams } from "react-router-dom";




export default function BlogFullPage() {
    
    // let history = useHistory() 
    const {id} = useParams()
    console.log(id);
  return (
    <div className='blogFullPage'>
        <div className="blogFullPageWrapper">
          <div className="postTop">
                  <h1>{Posts[id - 1].postTitle}</h1>
          </div>
          <div className="postCenter">
                  <img src={Posts[id - 1].postImage}/>
          </div>
          <div className="postBottom">
                  <p>{Posts[id - 1].postDiscription}</p>
          </div>
        </div>
    </div>
  )
}
