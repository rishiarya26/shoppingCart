import React from "react";

export default function DeleteButton(props) {
  const { handleDelete, item } = props;
  return (
    <>
      <button className="deleteButton" onClick={e => handleDelete(e, item)}>
        delete
      </button>
    </>
  );
}
