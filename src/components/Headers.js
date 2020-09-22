import React from "react";
import SingleFamily from "./singleFamily";

class Headers extends React.Component {
  constructor() {
    super();
    this.state = {
      activeHouse: 0,
      gotHouses: null
    };
  }

  fetchData() {
    const url =
      "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";
    fetch(url)
      .then(res => res.json())
      .then(houses => {
        this.setState({ gotHouses: houses });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  getHousesName() {
    if (this.state.gotHouses) {
      let housesName = this.state.gotHouses.houses.map(house => house.name);
      return housesName;
    } else return;
  }
  handleClick = index => {
    this.setState({ activeHouse: index });
  };

  render() {
    let housesName = this.getHousesName();
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
        {this.state.gotHouses ? (
          <SingleFamily {...this.state} housesName={housesName} />
        ) : (
          "Loading..."
        )}
      </>
    );
  }
}
export default Headers;
