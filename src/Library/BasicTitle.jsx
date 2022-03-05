import {interpolate, useCurrentFrame} from 'remotion'
import "../fonts.css";
 
const Title = ({title}) => {
    const frame = useCurrentFrame()
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'})
 
    return (
      <div style={{opacity}}>{title}</div>
    )
}
 
export const BasicTitle = ({title}) => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        fontFamily: "Bangers"
      }}
    >
      <Title title={title} />
    </div>
  );
};