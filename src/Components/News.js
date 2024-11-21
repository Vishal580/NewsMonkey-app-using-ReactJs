import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Guy Faulconbridge",
      "title": "Putin issues warning to US with new nuclear doctrine - Reuters",
      "description": "The doctrine outlines the threats that would make Russia contemplate using nuclear weapons.",
      "url": "https://www.reuters.com/world/europe/putin-issues-warning-us-with-new-nuclear-doctrine-2024-11-19/",
      "urlToImage": "https://www.reuters.com/resizer/v2/FU6UC5GM3BKAFIECSV7ZVWRNTE.jpg?auth=b74883dad52f5b73f4da79f0087f2986dc42dab99a4d4cbf17c3b9d6b4baccb6&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-19T08:46:15Z",
      "content": null
    },
    {
      "source": { "id": "axios", "name": "Axios" },
      "author": "Russell Contreras",
      "title": "ACLU sues to get clues on Trump's mass deportation plans - Axios",
      "description": "Civil liberties advocates are demanding ICE  turn over records on deportation flights",
      "url": "https://www.axios.com/2024/11/18/trump-deportation-plan-aclu-lawsuit",
      "urlToImage": "https://images.axios.com/xEoZM3e53RxUsSP_9XOplFUxU1M=/0x0:5000x2813/1366x768/2024/11/18/1731968555572.jpg",
      "publishedAt": "2024-11-19T07:28:44Z",
      "content": "Civil liberties advocates worried about President-elect Trump's plan for mass deportations are suing the federal government to get information on how authorities could rapidly remove people from the … [+3239 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "More than 40,000 protest New Zealand Maori rights bill - Al Jazeera English",
      "description": "Although the bill is unlikely to pass, opponents say bid to reverse progress for Maori threatens to divide society.",
      "url": "https://www.aljazeera.com/news/2024/11/19/tens-of-thousands-protest-new-zealand-maori-rights-bill",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24324011199420-1731996530.jpg?resize=1920%2C1440",
      "publishedAt": "2024-11-19T07:23:28Z",
      "content": "Tens of thousands have rallied outside New Zealands Parliament to protest against a bill that critics say would hurt the rights of Maori people.\r\nAn estimated 42,000 people demonstrated on Tuesday, c… [+2435 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters",
      "title": "Toxic smog persists over India's north; Delhi pollution remains severe - Reuters India",
      "description": "Residents in India's northern states woke up to another day of poor air quality on Tuesday, as a layer of dense fog shrouded most of the region, and pollution in the capital Delhi remained severe.",
      "url": "https://www.reuters.com/world/india/toxic-smog-persists-over-indias-north-delhi-pollution-remains-severe-2024-11-19/",
      "urlToImage": "https://www.reuters.com/resizer/v2/VNZHI65LGVPS3AP3ME2ODPXD3M.jpg?auth=4b6e6fcb301a98936921c2a03642976750ab57249f98418b932fe48b76e5ecb3&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-19T07:00:00Z",
      "content": null
    },
    {
      "source": { "id": "ign", "name": "IGN" },
      "author": "Wesley Yin-Poole",
      "title": "Report: Sony in Talks to Buy Kadokawa, Owner of Elden Ring and Dark Souls Developer FromSoftware - IGN",
      "description": "Sony is reportedly in talks to buy Kadokawa, whose subsidiary FromSoftware is behind smash hit Elden Ring, the Dark Souls and Armored Core games, and PlayStation exclusive Bloodborne.",
      "url": "https://www.ign.com/articles/report-sony-in-talks-to-buy-kadokawa-owner-of-elden-ring-and-dark-souls-developer-fromsoftware",
      "urlToImage": "https://assets-prd.ignimgs.com/2024/06/03/eldenring-shadow-fp-blogroll-1717445459923.jpg?width=1280",
      "publishedAt": "2024-11-19T06:54:03Z",
      "content": "Sony is reportedly in talks to buy Kadokawa, whose subsidiary FromSoftware is behind smash hit Elden Ring, the Dark Souls and Armored Core games, and PlayStation exclusive Bloodborne.\r\nReuters report… [+1692 chars]"
    },
    {
      "source": { "id": null, "name": "Nintendo Life" },
      "author": "Liam Doolan",
      "title": "The Game Awards 2024 Nominees Have Been Revealed - Zelda, Mario And Metroid Nominated - Nintendo Life",
      "description": "And DLC is up for 'GOTY'",
      "url": "https://www.nintendolife.com/news/2024/11/the-game-awards-2024-nominees-have-been-revealed-zelda-mario-and-metroid-nominated",
      "urlToImage": "https://images.nintendolife.com/d7f7979dff679/1280x720.jpg",
      "publishedAt": "2024-11-19T05:48:45Z",
      "content": "I thought Helldivers would get nominated for either GOTY or Game Direction over Black Myth Wukong. Id argue Helldivers has better direction than all of the nominees.\r\nVery interested to see where Bes… [+1128 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": null,
      "title": "Hong Kong 47: Pro-democracy icons sentenced to decades in jail - BBC.com",
      "description": "Joshua Wong and Benny Tai were convicted for attempting subversion in a controversial national security trial.",
      "url": "https://www.bbc.com/news/articles/cx2l4eynl4zo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4104/live/4bf016a0-a643-11ef-bdf5-b7cb2fa86e10.jpg",
      "publishedAt": "2024-11-19T05:23:54Z",
      "content": "A Hong Kong court has sentenced key pro-democracy leaders to years in jail for subversion, following a controversial national security trial.\r\nBenny Tai and Joshua Wong were among the so-called Hong … [+5925 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "Cowboys set unwanted NFL record as Dallas gets destroyed again in its own stadium vs. Texans on 'MNF' - CBS Sports",
      "description": "Dallas is in the history books for the wrong reasons",
      "url": "https://www.cbssports.com/nfl/news/cowboys-set-unwanted-nfl-record-as-dallas-gets-destroyed-again-in-its-own-stadium-vs-texans-on-mnf/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/11/19/cec19274-bff2-4cee-9847-b538566a3936/thumbnail/1200x675/eb030a22be095bb61a025fb8178407ee/cowboys.jpg",
      "publishedAt": "2024-11-19T05:17:29Z",
      "content": "The Dallas Cowboys' Monday evening began with a piece of their stadium's roof falling to the turf. It ended with a 34-10 loss to the Houston Texans that included some unwanted history. \r\nThe Cowboys … [+1854 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters.com",
      "title": "G20 leaders turn focus to climate change on Rio summit's last day - Reuters.com",
      "description": null,
      "url": "https://www.reuters.com/world/g20-leaders-turn-focus-climate-change-rio-summits-last-day-2024-11-19/",
      "urlToImage": null,
      "publishedAt": "2024-11-19T05:05:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Melissa Repko",
      "title": "Walmart will report earnings before the bell. Here's what to expect - CNBC",
      "description": "The discounter will deliver its latest sales results as inflation cools and the holiday season heats up.",
      "url": "https://www.cnbc.com/2024/11/19/walmart-wmt-q3-2025-earnings.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108064301-1731935488675-gettyimages-2184732367-PWeaver-241117-08.jpeg?v=1731960275&w=1920&h=1080",
      "publishedAt": "2024-11-19T05:01:01Z",
      "content": "Walmart will report earnings before the bell on Tuesday, as inflation eases and the holiday season heats up.\r\nHere's what the discounter is expected to report for the fiscal third quarter, according … [+1757 chars]"
    },
    {
      "source": { "id": null, "name": "NESN" },
      "author": "Tim Crowley",
      "title": "MLB Insider Suggests ‘Bigger Issue’ With Red Sox’s Juan Soto Pursuit - NESN",
      "description": "MLB insider Ken Rosenthal knows what Juan Soto would mean to the Boston Red Sox, though they have greater needs.",
      "url": "https://nesn.com/2024/11/mlb-insider-suggests-bigger-issue-with-red-soxs-juan-soto-pursuit/",
      "urlToImage": "https://nesn.com/wp-content/uploads/sites/5/2024/11/juan-soto_c38017.jpg",
      "publishedAt": "2024-11-19T04:25:25Z",
      "content": null
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Colby Itkowitz",
      "title": "Pennsylvania Supreme Court rules ballots with date error should not be counted - The Washington Post",
      "description": "The ruling is a major victory for Republican Senate candidate David McCormick, who holds a very narrow lead over Democratic Sen. Bob Casey ahead of a statewide recount.",
      "url": "https://www.washingtonpost.com/politics/2024/11/18/pennsylvania-supreme-court-ballot-date/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KZGP4KRCPK7DDYJHUQHTHE6DNY_size-normalized.jpg&w=1440",
      "publishedAt": "2024-11-19T04:24:11Z",
      "content": "The Pennsylvania Supreme Court ruled Monday that election officials must abide by an earlier decision and stop counting mail-in ballots that were invalidated because of an incorrect date on the outer… [+4232 chars]"
    },
    {
      "source": { "id": null, "name": "Deadline" },
      "author": "Dominic Patten",
      "title": "Menendez Brothers’ Clemency Consideration On Hold Until New L.A. DA Takes Office, Gavin Newsom Declares - Deadline",
      "description": "December 3 can’t come soon enough got the Menendez Brothers. The first week after Thanksgiving finds new Los Angeles County District Attorney Nathan Hochman taking office. As the former U.S. Assistant Attorney General made clear in his successful campaign aga…",
      "url": "http://deadline.com/2024/11/menendez-brothers-clemency-on-hold-new-district-attorney-1236180927/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/11/Gavin-Newsom-Erik-Menendez-Lyle-Menendez.jpg?w=1000",
      "publishedAt": "2024-11-19T04:13:00Z",
      "content": "December 3 can’t come soon enough got the Menendez Brothers.\r\nThe first week after Thanksgiving finds new Los Angeles County District Attorney Nathan Hochman taking office. As the former U.S. Assista… [+3546 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Sabrina Picou",
      "title": "‘Annoyed’ Cynthia Erivo schools Dax Shepard on how she wipes her butt with crazy-long nails - Page Six",
      "description": "“I’m a functioning adult and I’ve never walked around smelling like, you know,” the “Wicked” star said on the “Armchair Expert” podcast.",
      "url": "https://pagesix.com/2024/11/18/celebrity-news/annoyed-cynthia-erivo-schools-dax-shepard-on-how-she-wipes-her-butt-with-long-nails/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/11/93919917.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-11-19T04:05:00Z",
      "content": "Cynthia Erivo nailed her response to Dax Shepard’s “inappropriate” question about how she maintains proper hygiene with extra-long nails.\r\n“Can I ask you a really crazy question that’s inappropriate?… [+3200 chars]"
    },
    {
      "source": { "id": null, "name": "POLITICO.eu" },
      "author": "Clea Caulcutt",
      "title": "Macron says US made ‘good decision’ to lift limits on Ukraine missile use - POLITICO Europe",
      "description": "France says it is Moscow, not Washington, that is upping the ante.",
      "url": "https://www.politico.eu/article/france-macron-us-made-good-decision-lift-limits-ukraine-missile/",
      "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/11/19/GettyImages-2184851936.jpg",
      "publishedAt": "2024-11-19T03:28:00Z",
      "content": "The Kremlin's spokesperson Dmitry Peskov had earlier said the use of American weapons to attack targets in Russia constituted \"a qualitatively new situation in terms of the involvement of the United … [+794 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "ABC News",
      "title": "Gaetz allegedly flew 2 women to New York, paid them for sex: Attorney - ABC News",
      "description": null,
      "url": "https://abcnews.go.com/US/gaetz-allegedly-flew-2-women-new-york-paid/story?id\\\\u003d115983498",
      "urlToImage": null,
      "publishedAt": "2024-11-19T02:58:33Z",
      "content": null
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "ABC News",
      "title": "California confirms first US case of more severe mpox strain -- but risk to public remains low - ABC News",
      "description": null,
      "url": "https://abcnews.go.com/Health/california-confirms-us-case-severe-mpox-strain-risk/story?id\\\\u003d115936257",
      "urlToImage": null,
      "publishedAt": "2024-11-19T02:51:58Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Harry  Robertson",
      "title": "Asian stocks rise, dollar weak as US yields tick down - Yahoo Finance",
      "description": "LONDON (Reuters) -Government bonds and the Japanese yen rallied on Tuesday as investors flocked to safe-haven assets after President Vladimir Putin updated...",
      "url": "https://finance.yahoo.com/news/asian-stocks-rise-dollar-weak-023924974.html",
      "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/68c5b8be69675abfb93cd703522a05dd",
      "publishedAt": "2024-11-19T02:40:19Z",
      "content": "By Harry Robertson\r\nLONDON (Reuters) -Government bonds and the Japanese yen rallied on Tuesday as investors flocked to safe-haven assets after President Vladimir Putin updated Russia's nuclear doctri… [+2591 chars]"
    },
    {
      "source": { "id": null, "name": "Hollywood Reporter" },
      "author": "Frank Scheck",
      "title": "‘Queen of the Ring’ Review: Emily Bett Rickards Brings Soul and Strength to Female Wrestling Biopic - Hollywood Reporter",
      "description": "Opening the Fort Lauderdale International Film Festival, the Ash Avildsen-directed drama chronicles the story of Mildred Burke, the first million-dollar woman athlete in history.",
      "url": "http://www.hollywoodreporter.com/movies/movie-reviews/queen-of-the-ring-film-review-1236063810/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/QOTR_EmilyBettRickards-H-2024.jpg?w=1296&h=730&crop=1",
      "publishedAt": "2024-11-19T00:20:17Z",
      "content": "Wrestling pics are having a moment. Last year saw the excellent, if unjustly ignored, The Iron Claw, about the ill-fated Von Erich brothers. Now comes Ash Avildsen’s hugely entertaining, old-fashione… [+4208 chars]"
    },
    {
      "source": { "id": null, "name": "U.S. Soccer" },
      "author": null,
      "title": "USA vs. Jamaica: Starting XI & Lineup Notes - U.S. Soccer",
      "description": "The U.S. Men's National Team Starting XI and lineup notes for its Nov. 18 Concacaf Nations League match against Jamaica in St. Louis.",
      "url": "https://www.ussoccer.com/stories/2024/11/usa-vs-jamaica-lineups-starting-11-usa-lineup-today-nov-18",
      "urlToImage": "https://cdn.sanity.io/images/oyf3dba6/production/290adfc1160b8ec977ddf4384d4b0d3ecdac6e7c-1800x1200.jpg",
      "publishedAt": "2024-11-19T00:07:15Z",
      "content": "LINEUP NOTESUSMNT vs. Jamaica2024-25 Concacaf Nations League Quarterfinals Second LegNov. 18, 2024CITY PARK; St. Louis, Mo.Pre-Game Coverage: 7:30 p.m. ET on TNT, truTV, Universo, Max, Peacock and Fú… [+3557 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      article: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.article.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : "No Title Available"} description = {element.description ? element.description.slice(0, 88) : "No Description Available"} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>  
          })}
        </div>
      </div>
    )
  }
}
