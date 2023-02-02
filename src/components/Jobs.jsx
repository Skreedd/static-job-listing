import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((item) => {
        return keywords.every((key) => {
          return (
            item.role === key ||
            item.level === key ||
            item.languages.includes(key) ||
            item.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((item) => {
        return <Job key={item.id} data={item} setKeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
