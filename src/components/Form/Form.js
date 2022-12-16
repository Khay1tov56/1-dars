import "./form.css"
import { useRef, useState } from "react";

const Form = ({getValue, getSelect}) => {
    const text = useRef() 
function Input (e) {
    e.preventDefault()
    getValue(text.current.value);

}
function selectValue(e) {
    getSelect(e.target.value)
    console.log(e.target.value);
}
    return (
        <div className="container">
            <div className="my-5">
                <form className="d-flex justify-content-between" onSubmit={Input} autoComplete="off">
                <label className="form-label w-25">
                    <input type="search" className="form-control" name="searchinput" ref={text} placeholder="Search for a country…" />
                </label>
                <label className="form-label label">
                <select onChange={selectValue} className="form-select">
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