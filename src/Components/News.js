import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
  }

  constructor(props){
    super(props);
    console.log("Hello I am Constructor from news component")
    this.state={
      articles :[],
      loading: false,
      page:1
    }

    document.title=`${this.props.category} -NewsMonky`;
  }
  async componentDidMount(){
    this.props.setProgress(10);
    console.log("cdm");
    // let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=62b0f877eb9340a48cb5844f6b477676"
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6eaad51ce7f4f89b9a73e489343c673&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles })
    this.props.setProgress(100);
}
  handleprevclick= async ()=>{
    console.log("previous")
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6eaad51ce7f4f89b9a73e489343c673&page=${this.state.page-1}&pageSize=20`;
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
      page: this.state.page-1,
      articales: parsedData.articales
    })

  }

  handlenextclick= async ()=>{
    console.log("next")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6eaad51ce7f4f89b9a73e489343c673&page=${this.state.page+1}&pageSize=20`;
    let data =await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
      page: this.state.page+1,
      articales: parsedData.articales
    })
  }
  render() {
    return (
      <div className='container my-3 mb-3'>
        <h2 className='text-center'>New monkey top headlines from {this.props.category}</h2>
        <div className="row">
    {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title?element.title.slice(0, 45):""}
                description={element.description?element.description.slice(0, 88):""}
                imageurl={element.urlToImage}
                url={element.url}  date={element.publishedAt} source={element.source.name} />
            </div>
            })}
      </div>
        <div className='container d-flex justify-content-between'>
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/20)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
        </div>
        
    )
  }
}

export default News