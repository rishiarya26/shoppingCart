import React from 'react';

export default function Image(props) {
    const{data}=props;
  return (
    <>
      <div className="marg-bot-lg">
              {" "}
              <img
                src={data.imgUrl}
                alt="Img not found"
                width="50%"
                height="30%"
              />{" "}
            </div>
    </>
  );
}
