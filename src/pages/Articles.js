import React from "react";

import News from "../components/News";


const news = [
    {
      id: 1,
      author: "Kornel Misiowaty",
      heading: "Okradł kiełbasiarnie i uciekł za granice",
      intro: "Pościg policji trwał przez 30 dni."
    },
    {
      id: 2,
      author: "Kornel Misiowaty",
      heading: "Paliwo po 10zł za litr",
      intro: "Pojawiają się pierwsze protesty"
    },
    {
      id: 3,
      author: "Kornel Misiowaty",
      heading: "Wojna na Ukrainie",
      intro: "Nowe miasta uwolnione od okupacji"
    }
  ]

function Articles() {
    return (
        <div>
            {news.map((elem) => <News key={`news-${elem.id}`} heading={elem.heading} intro={elem.intro} author={elem.author}></News> )}
        </div>
    );
}

export default Articles;