import "./form.css"
const Form = () => {
    return (
        <div className="container">
            <div className="my-5">
                <form action="https://echo.htmlacademy.ru/" className="d-flex justify-content-between" method="POST" autoComplete="off">
                <label className="form-label w-25">
                    <input type="search" className="form-control" name="searchinput" placeholder="Search for a country…" />
                </label>
                <label className="form-label label">
                <select className="form-select">
                 <option hidden>Filter by Region</option>
                 <option value="Africa">Africa</option>
                 <option value="America">America</option>
                 <option value="Asia">Asia</option>
                 <option value="Europe">Europe</option>
                 <option value="Oceania">Oceania</option>
                </select>
                </label>
                </form>
            </div>
        </div>
    );
};

export default Form;