import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  [
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Austria orders lockdown for those not vaccinated against COVID-19 - Reuters",
          "description": "Austria is placing millions of people not fully vaccinated against the coronavirus in lockdown as of Monday to deal with a surge in infections to record levels and the growing strain on intensive-care units, the government said on Sunday.",
          "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/austria-orders-non-vaccinated-people-into-covid-19-lockdown-2021-11-14/",
          "urlToImage": "https://www.reuters.com/resizer/oCbr4nn1NLT4Ak3u7dni3gC1KJo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQHEZHT6KRKUVLKMFUPJTKRJV4.jpg",
          "publishedAt": "2021-11-14T14:27:00Z",
          "content": "A person wearing an FFP2 mask sits at St. Stephen's square amid the coronavirus disease (COVID-19) outbreak in Vienna, Austria, April 1, 2021. REUTERS/Lisi NiesnerVIENNA, Nov 14 (Reuters) - Austria i… [+3032 chars]"
        },
        {
          "source": { "id": null, "name": "TMZ" },
          "author": "TMZ Staff",
          "title": "Paris Hilton and Carter Reum Celebrate Marriage Third Night in a Row - TMZ",
          "description": "Paris Hilton continues to ride the wedding train ... and the third night was off the hook!",
          "url": "https://www.tmz.com/2021/11/14/paris-hilton-carter-reum-wedding-marriage-celebration-estate/",
          "urlToImage": "https://imagez.tmz.com/image/07/16by9/2021/11/14/073a3f98c4ac43ff80967cc320303b0f_xl.jpg",
          "publishedAt": "2021-11-14T14:15:00Z",
          "content": "Paris Hilton continues to ride the wedding train ... and the third night was off the hook!\r\nParis and her new hubby, Carter Reum, went back to their wedding venue -- the Bel-Air estate of her late gr… [+1137 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Nicquel Terry Ellis, CNN",
          "title": "Howard students are living in tents to avoid the mold, roach and mice infestation in their dorms - CNN",
          "description": "Jasmine Joof said she has been sick with congestion, coughing and headaches for several weeks after discovering the mold growing in her Howard University dorm caused an allergic reaction.",
          "url": "https://www.cnn.com/2021/11/14/us/howard-university-protests-dorm-conditions/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211111155847-02-howard-university-housing-protest-1025-super-tease.jpg",
          "publishedAt": "2021-11-14T14:07:00Z",
          "content": "(CNN)Jasmine Joof said she has been sick with congestion, coughing and headaches for several weeks after discovering the mold growing in her Howard University dorm caused an allergic reaction. \r\nThe … [+6825 chars]"
        },
        {
          "source": { "id": null, "name": "NBCSports.com" },
          "author": "Mike Florio",
          "title": "Will the Seahawks constantly blitz Aaron Rodgers today? - NBC Sports",
          "description": "After 10 days of being away from football (but still somehow showing up with a toe injury), Packers quarterback Aaron Rodgers will be back on the field today, one day after making his return. The Seahawks, who haven’t won at Lambeau Field since 1999, should g…",
          "url": "https://profootballtalk.nbcsports.com/2021/11/14/will-the-seahawks-constantly-blitz-aaron-rodgers-today/",
          "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/11/GettyImages-1348636351-e1636898562695.jpg",
          "publishedAt": "2021-11-14T14:06:00Z",
          "content": "After 10 days of being away from football (but still somehow showing up with a toe injury), Packers quarterback Aaron Rodgers will be back on the field today, one day after making his return.\r\nThe Se… [+1514 chars]"
        },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Maria Puente and Hannah Yasharoff, USA TODAY",
          "title": "Injured Queen Elizabeth II won't attend Remembrance Sunday, her scheduled return to public - USA TODAY",
          "description": "Queen Elizabeth II has sprained her back, Buckingham Palace says, keeping her from returning to the public after several weeks of health concerns.",
          "url": "https://www.usatoday.com/story/entertainment/celebrities/2021/11/14/queen-elizabeth-injured-skips-remembrance-sunday/6341715001/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2021/11/02/USAT/b51e76ab-e733-4a6a-8b2a-9f4e1c2b9d33-VPC_QUEEN_CLIMATE_POOL_WIDE.jpg?auto=webp&crop=1911,1075,x8,y0&format=pjpg&width=1200",
          "publishedAt": "2021-11-14T14:00:03Z",
          "content": "Queen Elizabeth II has sprained her back, Buckingham Palace says, keeping her from attending what would have been her return to duty Sunday after several weeks of heighted concern over the state of t… [+4370 chars]"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Jennifer Pattison Tuohy",
          "title": "Google Nest Cam with floodlight review: good security camera, awkward design - The Verge",
          "description": "This capable security camera has an awkward design",
          "url": "https://www.theverge.com/22776184/google-nest-cam-floodlight-review-smart-security-camera",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/6JgFtFVQD4dgdUUvLNeyNiCnols=/456x322:2028x1145/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23006575/jtuohy_211111_4869_0016.jpg",
          "publishedAt": "2021-11-14T14:00:00Z",
          "content": "Googles new floodlight camera is bright but not beautiful\r\nSpeedy smart alerts and good lighting control make up for an odd design\r\nIf you buy something from a Verge link, Vox Media may earn a commis… [+11241 chars]"
        },
        {
          "source": { "id": null, "name": "Space.com" },
          "author": "Tariq Malik",
          "title": "SpaceX shows off epic photo of Starship SN20 engine test - Space.com",
          "description": "Starship SN20 will be SpaceX's first to reach orbit.",
          "url": "https://www.space.com/spacex-starship-sn20-engine-test-epic-photo",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/vucCw93dY9xmpiuoVfjwLT-1200-80.jpg",
          "publishedAt": "2021-11-14T13:39:54Z",
          "content": "This SpaceX photo shows the first test-firing of six Raptor engines on the company's Starship SN20 rocket prototype on Nov. 12, 2021 at the Starbase facility in near Boca Chica Village in South Texas… [+3617 chars]"
        },
        {
          "source": { "id": "the-hill", "name": "The Hill" },
          "author": "Mychael Schnell",
          "title": "'SNL' knocks Cruz for labeling Big Bird vaccine tweet 'propaganda' | TheHill - The Hill",
          "description": "“Saturday Night Live” knocked Sen. Ted Cruz (R-Texas) during...",
          "url": "https://thehill.com/homenews/senate/581445-snl-knocks-cruz-for-labeling-big-bird-vaccine-tweet-propaganda",
          "urlToImage": "https://thehill.com/sites/default/files/cruzsnl_111421snlyt.jpg",
          "publishedAt": "2021-11-14T12:49:31Z",
          "content": "Saturday Night Live knocked Sen. Ted CruzRafael (Ted) Edward CruzSunday shows preview: Biden administration confronts inflation spikeMcConnell won't go to White House signing ceremony for infrastruct… [+3258 chars]"
        },
        {
          "source": { "id": null, "name": "Simple Flying" },
          "author": "",
          "title": "Breaking: Indigo Partners Reveals Huge Orders For 255 Airbus A321 - Simple Flying",
          "description": "While the first day of the Dubai Airshow started off slowly, it seems to be gathering pace. As…",
          "url": "https://simpleflying.com/breaking-indigo-partners-reveals-huge-orders-for-255-airbus-a321/",
          "urlToImage": "https://simpleflying.com/wp-content/uploads/2021/11/unnamed-2-e1636892173254.jpg",
          "publishedAt": "2021-11-14T12:11:15Z",
          "content": "While the first day of the Dubai Airshow started off slowly, it seems to be gathering pace. As the afternoon progressed, Airbus revealed an order from Indigo Partners consisting of 255 A321 family ai… [+3007 chars]"
        },
        {
          "source": { "id": "politico", "name": "Politico" },
          "author": "Holly Otterbein",
          "title": "GOP roars back to life in Trump-resistant Pennsylvania suburbs - POLITICO",
          "description": "The Republican rebound suggests the Democratic suburban slide reaches beyond Virginia and New Jersey.",
          "url": "https://www.politico.com/news/2021/11/14/gop-trump-pennsylvania-suburbs-521655",
          "urlToImage": "https://static.politico.com/14/5c/df2a526b404c91e686cf0c494a44/webp.net-resizeimage%20(38).jpg",
          "publishedAt": "2021-11-14T12:01:29Z",
          "content": "Pennsylvania will be home to highly competitive House, Senate and gubernatorial races in next years midterm elections and the GOPs local comeback here shows that Democrats newfound shakiness among su… [+7182 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "",
          "title": "What America's first second gentleman Doug Emhoff did in Paris - NPR",
          "description": "Doug Emhoff, the husband of Vice President Harris, is taking a very traditional approach to his role of second spouse. The Paris trip was their first diplomatic trip abroad.",
          "url": "https://www.npr.org/2021/11/14/1055508416/doug-emhoff-is-americas-first-second-gentleman-in-paris-he-showed-what-that-mean",
          "urlToImage": "https://media.npr.org/assets/img/2021/11/13/ap21316636479987_wide-df1debe083037e6e166c466ff600f80114cb0af6.jpg?s=1400",
          "publishedAt": "2021-11-14T12:00:52Z",
          "content": "Second gentleman Douglas Emhoff looks up as he tours an exhibition at the Petit Palais museum with French first lady Brigitte Macron and artist Jean-Michel Othoniel, right.\r\nIan Langsdon/AP\r\nIt was a… [+4806 chars]"
        }
      ]
    constructor(){
        super();
        console.log("hello I am a constructer from news Component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-4">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="My title" description="MyDesc" imageUrl="https://www.reuters.com/resizer/oCbr4nn1NLT4Ak3u7dni3gC1KJo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LQHEZHT6KRKUVLKMFUPJTKRJV4.jpg" newsUrl="TODO"/>
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="My title" description="MyDesc" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="My title" description="MyDesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
