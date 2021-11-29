import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("hello I am a constructer from news Component")
        this.state = {
            articles: [],
            loading: false,
            page:1

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2c7e73a38f064c34a55b46061e6f20c6&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async ()=>{
        console.log("previous")
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c7e73a38f064c34a55b46061e6f20c6&page=${this.state.page + 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1
        })

    }

    handleNextClick = async ()=>{
        console.log("Next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2c7e73a38f064c34a55b46061e6f20c6&page=${this.state.page + 1}&pageSize=18`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({ articles: parsedData.articles })
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles, 
            })
        }
    }

    render() {
        console.log("Render")
        return (
            <div className="container my-4">
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between ">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &laquo; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
