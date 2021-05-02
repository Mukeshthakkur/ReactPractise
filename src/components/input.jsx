import React from "react";

export default function input({ name, onChange, label, value, errors }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          onChange={onChange}
          value={value}
          type="text"
          name={name}
          className="form-control"
        />
      </div>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
}

// import React from "react";

// export default function ({ name, label, error,  value, onChange }) {
//   return (
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <input
//         autoFocus
//         value={value}
//         id={name}
//         name={name}
//         type="text"
//         onChange={onChange}
//         className="form-control"
//       />

//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// }
