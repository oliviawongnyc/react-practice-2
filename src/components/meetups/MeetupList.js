import classes from './MeetupList.module.css';
import Meetup from './Meetup';

function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <Meetup key={meetup.id} meetupInfo={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
