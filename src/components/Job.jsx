import React from "react";

const Job = (props) => {
  const {
    company,
    contract,
    languages,
    featured,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];


  return (
    <div className={featured ? "job job--borderLeft" : "job"}>
      <div className="job__logo">
        <img src={logo} alt="" />
      </div>
      <div className="job__left">
        <div className="company">
          <span className="company-name">{company}</span>
          {props.data.new && <span className="new">NEW!</span>}
          {props.data.featured && <span className="featured">FEATURED</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•</span>
          <span>{contract}</span>
          <span>&nbsp;•</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="job__right">
        {keywords.map((key, id) => (
          <button onClick={() => props.setKeywords(key)} key={id}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
