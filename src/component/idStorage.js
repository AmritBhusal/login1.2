import React from "react";

export default function idStorage() {
  return (
    <div className="idStorage">
      <form>
        <fieldset>
          <h1>idStorage</h1>
        </fieldset>
        <br />
        <fieldset>
          <label>
            <p>
              Name
              <input type="name" required />*
            </p>
            <p>
              ID
              <input type="name" required />*
            </p>
            <p>
              Private-Key
              <input type="hash" required />*
            </p>
            <p>
              Public-Key
              <input type="hash" required />*
            </p>
            <br />
            <p>
              data
              <input type="hash" />
            </p>
          </label>
          <p />
          <button variant="primary" size="lg" type="submit">
            {" "}
            Data Length{" "}
          </button>{" "}
          <button variant="primary" size="lg" type="submit">
            {" "}
            Data store{" "}
          </button>{" "}
          <button variant="primary" size="lg" type="submit">
            {" "}
            Get data{" "}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
