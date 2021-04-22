import React from "react";

export default function dataStorage() {
  return (
    <div className="dataStorage">
      <form>
        <fieldset>
          <h1>DataStorage</h1>
        </fieldset>
        <br />
        <fieldset>
          <label>
            <p>
              address
              <input type="hash" required />*
            </p>
            <p>
              hash
              <input type="hash" required />*
            </p>
            <p></p>
            <br />
            <p>
              input hash
              <input type="hash" required />*
            </p>
          </label>
          <p />
          <button variant="primary" size="lg" type="submit">
            {" "}
            Data{" "}
          </button>{" "}
          <button variant="primary" size="lg" type="submit">
            {" "}
            Get{" "}
          </button>{" "}
          <button variant="primary" size="lg" type="submit">
            {" "}
            Checker{" "}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
