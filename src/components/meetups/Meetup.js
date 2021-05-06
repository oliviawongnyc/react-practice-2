import { useContext } from 'react';
import classes from './Meetup.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function Meetup({ meetupInfo }) {
  const { image, title, address, description, id } = meetupInfo;

  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, title, description, image, address });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h1>{title}</h1>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button
            className={classes.button}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default Meetup;
