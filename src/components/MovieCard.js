import {Link} from 'react-router-dom';

function MovieCard({data}) {
  return (
    <article>
        <h2>{data.title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${data.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;