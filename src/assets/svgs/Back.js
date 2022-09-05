import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Back = ({width, height}) => {
  return (
    <Svg
      width={width ? width : 13}
      height={height ? height : 21}
      viewBox="0 0 13 21"
      fill="none">
      <Path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9267 0.949552C11.374 0.418975 10.5012 0.418975 9.94846 0.949552L0 10.5L9.94847 20.0504C10.5012 20.581 11.374 20.581 11.9267 20.0504C12.5123 19.4883 12.5123 18.5519 11.9267 17.9898L4.12482 10.5L11.9267 3.01025C12.5123 2.44813 12.5123 1.51167 11.9267 0.949552Z"
        fill="#343434"
      />
    </Svg>
  );
};

export {Back};
