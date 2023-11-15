import Svg, {Path} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  color: string;
}

function DenyIcon({width, height, color}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 18" fill="none">
      <Path
        d="M8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4C4 5.06087 4.42143 6.07828 5.17157 6.82843C5.92172 7.57857 6.93913 8 8 8C9.06087 8 10.0783 7.57857 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0ZM15.5 9C13 9 11 11 11 13.5C11 16 13 18 15.5 18C18 18 20 16 20 13.5C20 11 18 9 15.5 9ZM8 10C3.58 10 0 11.79 0 14V16H9.5C9.16993 15.2078 9 14.3582 9 13.5C9.00428 12.3143 9.3328 11.1524 9.95 10.14C9.32 10.06 8.68 10 8 10ZM15.5 10.5C17.16 10.5 18.5 11.84 18.5 13.5C18.5 14.06 18.35 14.58 18.08 15L14 10.92C14.42 10.65 14.94 10.5 15.5 10.5ZM12.92 12L17 16.08C16.58 16.35 16.06 16.5 15.5 16.5C13.84 16.5 12.5 15.16 12.5 13.5C12.5 12.94 12.65 12.42 12.92 12Z"
        fill={color}
      />
    </Svg>
  );
}

export default DenyIcon;
