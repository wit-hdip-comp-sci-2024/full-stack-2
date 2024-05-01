import React from "react";
import { LanguageProps } from "../../types/samples/interfaces";//props interface defined in the types folder as it is shared between components.

const Demo: React.FC<LanguageProps> = (props) => {
    return (
        <div>
            <h2>{`${props.heading} Languages`}</h2>
            <ul>
                {props.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    );
}

export default Demo;