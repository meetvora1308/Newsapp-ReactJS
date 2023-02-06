import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppiner from './Spinner';
// import PropTypes from 'prop-types'

export class News extends Component {
  // static defaultProps = {
  //   country : "in",
  //   pageSize: 8,
  //   category:"general"
  // }
  //   static PropTypes = {
  //     country : PropTypes.string,
  //     pageSize : PropTypes.number,
  //     category: PropTypes.string
      
  //   }
  constructor() {
    super();
    this.state = {
        articles : [],
        loading :false,
        page :1 
    }
  }

    async componentDidMount(){
      
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d72f932ea5c24d379c398b9513ca6ea9&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});

      let data = await fetch(url);
      let parseData = await data.json()
      this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
      console.log(parseData);

    }
    handleNextClick = async () => {
      if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d72f932ea5c24d379c398b9513ca6ea9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json()
    

      this.setState({
        page : this.state.page +1,
        articles:parseData.articles,
        loading:false
      })
    }
  }

    handlePrevClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d72f932ea5c24d379c398b9513ca6ea9&page=${this.state.page11}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json()
      
      

      this.setState({
        page : this.state.page -1,
        articles:parseData.articles,
        loading:false
      })


    }


  render() {
    return (
      <div className='container my-3'>
        <h2>News - Top Headlines</h2>
       
          {this.state.loading && <Sppiner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{

              return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>

            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
