import React from "react";
import {friendProps} from "./interfaces"

const Friend: React.FC<friendProps> = ({name, email}) => {
  return (
    <li >
      <h3>{` ${name.first} ${name.last}`}</h3>
      <a href={"mailto:" + email}>
        {email}{" "}
      </a>
    </li>
  );
};

export default Friend