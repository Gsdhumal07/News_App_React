import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageurl, url ,date ,source } = this.props;
    return (
      <div className="my-3 m-3 3">
        <div className="card" >
          <img
            src={!imageurl?"https://s.w-x.co/util/image/w/in-radio_telescope_0.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60": imageurl}
            alt=" "
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            Inbox
  <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:"90%" ,zIndex:"1"}}>
    {source} 
    
  </span>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">On {new Date(date).toGMTString()}</small></p>
            <a
            rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
