import Svg, {Path} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  color: string;
}

function AccpetIcon({width, height, color}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 17" fill="none">
      <Path
        d="M18.1 8.5L19.5 9.91L12.97 16.5L9.5 13L10.9 11.59L12.97 13.67L18.1 8.5ZM7 13L10 16H0V14C0 11.79 3.58 10 8 10L9.89 10.11L7 13ZM8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0Z"
        fill={color}
      />
    </Svg>
  );
}

export default AccpetIcon;
