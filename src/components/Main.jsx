import { useCategoriesDataContext } from "../contexts/CategoriesDataContext";

export default function Main() {
  const { movies, series } = useCategoriesDataContext();

  return (
    <main>
      <div>
        <h2>Lista Films</h2>
        <ol>
          {movies.map((movie) => {
            //Controllo se e valido il value altrimenti sostituisco
            if (movie.original_language === "en") {
              movie.original_language = "gb";
            }
            if (movie.original_language === "ja") {
              movie.original_language = "jp";
            }

            // trasformo il voto in un numero intero
            const stars = Math.ceil(movie.vote_average / 2);
            const emptyStars = 5 - stars;
            return (
              <>
                <li key={movie.id}>
                  {movie.title} ---- {movie.original_title} -----
                  {movie.original_language && (
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.original_language.toUpperCase()}.svg`}
                      alt={movie.original_language}
                      style={{ width: "30px", height: "20px" }}
                    />
                  )}
                </li>
                <img
                  src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  {Array(stars)
                    .fill()
                    .map((_, index) => (
                      <i
                        className="fa-solid fa-star star-solid "
                        key={`full-${index}`}
                      ></i>
                    ))}
                  {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                      <i
                        className="fa-regular fa-star"
                        key={`empty-${index}`}
                      ></i>
                    ))}
                </div>
              </>
            );
          })}
        </ol>
      </div>

      <div>
        <h1>Lista Series</h1>
        <ol>
          {series.map((serie) => {
            if (serie.origin_country === "en") {
              serie.origin_country = "gb";
            }
            if (serie.origin_country === "ja") {
              serie.origin_country = "jp";
            }

            // trasformo il voto in un numero intero
            const stars = Math.ceil(serie.vote_average / 2);
            const emptyStars = 5 - stars;

            return (
              <>
                <li key={serie.id}>
                  {serie.original_name} ---- {serie.name}
                  {serie.origin_country && (
                    <img
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${serie.origin_country}.svg`}
                      alt={serie.origin_country}
                      style={{ width: "30px", height: "20px" }}
                    />
                  )}
                </li>
                <img
                  src={`http://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                  alt={serie.original_name}
                />
                <div>
                  {Array(stars)
                    .fill()
                    .map((_, index) => (
                      <i
                        className="fa-solid fa-star star-solid "
                        key={`full-${index}`}
                      ></i>
                    ))}
                  {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                      <i
                        className="fa-regular fa-star"
                        key={`empty-${index}`}
                      ></i>
                    ))}
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
