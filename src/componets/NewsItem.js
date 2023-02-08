import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{width: "18rem"}}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" sytle={{left:'90%',zIndex:'1'}}>
    {source}
  </span>
            <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2021/09/Sensex_Nifty-3-770x433.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"unknow"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
