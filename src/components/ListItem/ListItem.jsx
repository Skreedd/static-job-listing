import React from "react";
import "./ListItem.scss";
// import IMG from "../../assets/images/photosnap.svg";
import data from "../../data.json";

const ListItem = () => {
  console.log(data);
  return (
    <div className="container">
    {data.map((item) => (
      <div className="listItem">
          <div className="left" key={item.id}>
            <img src={item.logo} alt="" />
            <div>
              <div className="job-tittle">
                <h3>{item.company}</h3>
                {/* <span>NEW!</span> */}
                {/* <span>FEATURED</span> */}
              </div>
              <h2>{item.position}</h2>
              <ul>
                <li>{item.postedAt}</li>
                <li>{item.contract}</li>
                <li>{item.location}</li>
              </ul>
            </div>
            <div className="right">
              <h3>{item.role}</h3>
            </div>
          </div>
      </div>
    ))}
    </div>
  );
};

export default ListItem;
