import React from "react";
import VerticalNewsCard from "./VerticalNewsCard";

const VerticalNewsList = ({ newsList }) => {
  return (
    <div className="grid max-[480px]:grid-cols-1 max-[480px]:gap-0 max-[640px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
      {newsList?.map((news) => (
        <>
          <VerticalNewsCard key={news?.title} news={news} />
          <hr className="divider min-[480px]:hidden last:hidden" />
        </>
      ))}
    </div>
  );
};

export default VerticalNewsList;
