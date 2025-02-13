import { useCategoriesDataContext } from "../contexts/CategoriesDataContext";

export default function Categories() {
  const { movies, series } = useCategoriesDataContext();

  return (
    <main className="bg-700 bg-black ">
      <h1 className="ms-title-effect font-semibold">BoolFlix</h1>
      <section className="py-5 container mx-auto shadow-2xl">
        <h2 className="text-white font-bold ml-3.5 text-3xl">Lista Films</h2>
        <div className="flex overflow-x-auto space-x-4 p-4">
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
              <div
                key={movie.id}
                className="relative w-60 h-[350px] rounded-lg ms-shadow"
              >
                {/* // Fata cardului */}
                <div
                  style={{
                    backgroundImage: movie.poster_path
                      ? `url(http://image.tmdb.org/t/p/w342/${movie.poster_path})`
                      : "url(../image/search.webp)",
                  }}
                  className="  h-full w-60 bg-cover bg-center bg-no-repeat bg-white rounded-lg shadow p-4 min-w-[200px] text-white  flex justify-center items-center"
                >
                  <i className="cursor-pointer text-6xl  text-red-600 opacity-0 hover:opacity-60 fa-regular fa-circle-play"></i>
                </div>
                {/* // Spatele Cardului */}
                <div className="ms-card-back absolute inset-0 h-full w-60 bg-gray-800 text-white  rounded-lg p-2.5 transform rotate-y-180 transition-transform duration-1000 backface-hidden">
                  <div className="flex-col text-center py-1.5 text-2xl">
                    <h1 className="font-bold"> {movie.title} </h1>
                    <span className="flex justify-center items-center pt-2.5">
                      {movie.original_language && (
                        <img
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.original_language.toUpperCase()}.svg`}
                          alt={movie.original_language}
                          style={{ width: "30px", height: "20px" }}
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-sm px-1 ">{movie.overview}</p>
                  <div className="text-center absolute bottom-2 left-18">
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
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* //Lista Series  */}
      <section className="pt-8 container mx-auto ">
        <h2 className="text-white font-bold ml-3.5 text-3xl">Lista Series</h2>
        <div className="flex overflow-x-auto space-x-4 p-4">
          {series.map((serie) => {
            //Controllo se e valido il value altrimenti sostituisco
            if (serie.original_language === "en") {
              serie.original_language = "gb";
            }
            if (serie.original_language === "ja") {
              serie.original_language = "jp";
            }

            // trasformo il voto in un numero intero
            const stars = Math.ceil(serie.vote_average / 2);
            const emptyStars = 5 - stars;
            return (
              <div
                key={serie.id}
                className="relative w-60 h-[350px] rounded-lg ms-shadow"
              >
                {/* // Fata cardului */}
                <div
                  style={{
                    backgroundImage: serie.poster_path
                      ? `url(http://image.tmdb.org/t/p/w342/${serie.poster_path})`
                      : "url(../image/search.webp)",
                  }}
                  className="  h-full w-60 bg-cover bg-center bg-no-repeat bg-white rounded-lg shadow p-4 min-w-[200px] text-white  flex justify-center items-center"
                >
                  <i className="cursor-pointer text-6xl  text-red-600 opacity-0 hover:opacity-60 fa-regular fa-circle-play"></i>
                </div>
                {/* // Spatele Cardului */}
                <div className="ms-card-back absolute inset-0 h-full w-60 bg-gray-800 text-white  rounded-lg p-2.5 transform rotate-y-180 transition-transform duration-700 backface-hidden">
                  <div className="flex-col text-center py-1.5 text-2xl">
                    <h1 className="font-bold"> {serie.original_name} </h1>
                    <span className="flex justify-center items-center pt-2.5">
                      {serie.original_language && (
                        <img
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${serie.original_language.toUpperCase()}.svg`}
                          alt={serie.original_language}
                          style={{ width: "30px", height: "20px" }}
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-sm px-1 ">{serie.overview}</p>
                  <div className="text-center absolute bottom-2 left-18">
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
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
