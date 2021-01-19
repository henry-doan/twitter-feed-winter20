import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tweets, setTweet] = useState([])

  useEffect( () => {
    axios.get('/api/tweets')
      .then( res => {
        setTweet(res.data)
      })
  })

  return (
    <>
      <h1>Tweets</h1>
      {
        tweets.map( t => 
          <div key={t.id}>
            <img src={t.user.profile_image_url} />
            <h3>{t.user.name}</h3>
            <p>{t.text}</p>
          </div>
        )
      }
    </>
  )
}
export default App;
