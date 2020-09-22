import React from "react";
import SingleMember from "./singleMember";

function SingleFamily(props) {
  console.log("called");
  console.log(props);
  let activeHousePeople = props.gotHouses.houses.find(
    (house, index) => index === props.activeHouse
  ).people;
  console.log(activeHousePeople);
  return (
    <section className="grid">
      <SingleMember activeHousePeople={activeHousePeople} />
    </section>
  );
}
export default SingleFamily;
