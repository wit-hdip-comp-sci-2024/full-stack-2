import React from "react";
import {friendProps} from "./interfaces"

const FriendImage: React.FC<friendProps> = ({name, picture}) => {
 
  return (
    <li>
      <h3>{` ${name.first} ${name.last}`}</h3>
      <img src={picture.medium} />
    </li>
  );
};

export default FriendImage