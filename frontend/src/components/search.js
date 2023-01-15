const Search = () => {
    <form action="/"  method="get">
        <label>
            <span className="visually-hidden">Search places you wanna go on moon</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search your favorite place"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
}

export default Search;