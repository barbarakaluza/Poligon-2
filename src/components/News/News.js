import React, { useState } from "react";

import Scoring from "../Scoring";
import Author from "../Author";


function News({ heading, intro, author }) {

    const [score] = useState(5);

    return (
      <div className="News">
        <h2 className="News-heading">{heading}</h2>
        <p className="News-intro">{intro}</p>
        <Author author={author}/>
        <Scoring score={score}/>
      </div>
    );
  }


  // class News extends React.Component {
//   state = {
//     score: 1,
//     date: new Date()
//   };

//   componentDidMount() {
      // let loading = true;
//     this.setState({ score: 5 }, () => {
//   loading = false;
// });
//   }


//   render () {
//     const { heading, intro} = this.props;
//     const { score } = this.state;
//     const { date } = this.state;

//     return (
//       <div className="News">
//         <p>{date}</p>
//         <h2 className="News-heading">{heading}</h2>
//         <p className="News-intro">{intro}</p>
//         <p>{score}</p>
//       </div>
//     )
//   }
// }



  export default News;