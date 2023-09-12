const Home = () => {
//   const [movieList, setMovieList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function getMovieList() {
//       try {
//         setLoading(true);
//         const response = await fetchTrandingMovies();
//         setMovieList([...response]);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getMovieList();
//   }, []);

  return (
    <>
      {/* {loading && <Loader />} */}
      <h1>Trending today</h1>
    </>
  );
};

export default Home;