import React from "react";

function SingleMember(props) {
  console.log(props);
  return (
    <>
      {props.activeHousePeople.map(single => {
        return (
          <article className="article">
            <div className="grid-article">
              <img src={single.image} alt="" />
              <h3 className="name"> {single.name}</h3>
            </div>
            <p className="description">{single.description}</p>
          </article>
        );
      })}
    </>
  );
}
export default SingleMember;
