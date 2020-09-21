import React from "react";

class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
      activeHouse: 0,
      gotHouses: null
    };
  }
  componentDidMount() {
    // console.log("entered");
    const url =
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";
    fetch(url)
      .then(res => res.json())
      .then(houses => {
        // console.log(houses);
        this.setState({ gotHouses: houses });
      });
  }
  getHousesName() {
    // console.log(this.state.gotHouses);
    if (this.state.gotHouses) {
      let housesName = this.state.gotHouses.houses.map(house => house.name);
      return housesName;
    } else return;
  }
  handleClick = index => {
    // console.log(index);
    this.setState({ activeHouse: index });
  };

  render() {
    let housesName = this.getHousesName();
    // let housesName = this.state.got.houses.map(house => house.name);
    // console.log(housesName);
    return (
      <>
        <div class="header-heading flex">
          <i class="fas fa-crown"></i>
          <h1>Peoples Of GOT</h1>
        </div>
        <nav>
          <ul className="flex nav-menu">
            {!housesName
              ? ""
              : housesName.map((house, index) => {
                  return (
                    <li className="nav-menu-item">
                      <button
                        className={
                          this.state.activeHouse === index
                            ? "btn is-focus"
                            : "btn reset"
                        }
                        onClick={() => this.handleClick(index)}
                      >
                        {house}
                      </button>
                    </li>
                  );
                })}
          </ul>
        </nav>
      </>
    );
  }
}
export default Headers;
