import { Sequence, Video, Img, staticFile } from "remotion";
import { BasicTitle } from "./Library/BasicTitle";
import { Random } from "./Library/Random";
// const vid = staticFile("/steve.mp4");
const logo = staticFile("/logo.png");
 
export const Scene1 = () => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
        backgroundColor: "white",
      }}
    >
      <Sequence from={0} durationInFrames={40}>
        <BasicTitle title="Hello" />
      </Sequence>
      <Sequence from={40} durationInFrames={20}>
        <BasicTitle title="World" />
      </Sequence>
      <Sequence from={60} durationInFrames={90} name="logo.png">
        {/* <Img src={logo} /> */}
        <Random seed="Grid" />
      </Sequence>
      {/* <Sequence from={150} name="Hi">
        <Video src={vid} />
      </Sequence> */}
    </div>
  );
};