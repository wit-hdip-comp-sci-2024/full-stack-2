import React from "react";
// import Friend from ....  STATIC DEPENDENCY
import { FilteredFriendListProps } from "./interfaces";

const FilteredFriendList:React.FC<FilteredFriendListProps>  = ({list, render}) => {
  const friends = list.map((item) => 
      render(item)
  );
  return <ul>{friends}</ul>;
};

export default FilteredFriendList;
