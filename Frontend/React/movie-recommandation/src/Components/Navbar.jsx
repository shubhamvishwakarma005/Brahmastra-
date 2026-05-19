function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-b border-slate-700">

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 py-5">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              🎬 Movie Discoveror
            </h1>

            <p className="text-slate-300 text-sm mt-1">
              Discover trending and top rated movies
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">

            {/* Search Bar */}
            <div className="relative w-full md:w-80">

              <input
                type="text"
                placeholder="Search movies..."
                className="w-full px-5 py-3 rounded-2xl bg-slate-100 text-black outline-none border border-transparent focus:border-sky-400 focus:ring-2 focus:ring-sky-400 transition-all duration-300 shadow-md"
              />

              {/* Search Icon */}
              <span className="absolute right-4 top-3.5 text-gray-500">
                🔍
              </span>

            </div>

            {/* Genre Filter */}
            <select
              className="px-4 py-3 rounded-2xl bg-slate-100 text-black outline-none focus:ring-2 focus:ring-sky-400 shadow-md cursor-pointer"
            >
              <option value="">🎭 Genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>

            {/* Year Filter */}
            <select
              className="px-4 py-3 rounded-2xl bg-slate-100 text-black outline-none focus:ring-2 focus:ring-sky-400 shadow-md cursor-pointer"
            >
              <option value="">📅 Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>

            {/* Rating Filter */}
            <select
              className="px-4 py-3 rounded-2xl bg-slate-100 text-black outline-none focus:ring-2 focus:ring-sky-400 shadow-md cursor-pointer"
            >
              <option value="">⭐ Rating</option>
              <option value="9">9+</option>
              <option value="8">8+</option>
              <option value="7">7+</option>
              <option value="6">6+</option>
            </select>

            <button onClick={fetchMovies}>
   Search
</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;