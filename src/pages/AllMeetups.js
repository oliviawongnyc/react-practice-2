import MeetupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react';

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-practice-d8175-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) =>
      response.json().then((data) => {
        const meetups = [];
        for (let key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
    );
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUps;
