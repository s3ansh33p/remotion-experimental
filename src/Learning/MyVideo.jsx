import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
 
export const MyVideo = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();

  // const opacity = frame >= 20 ? 1 : frame / 20; // opacity is 0 to 1 by frame 20
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = spring({
    fps,
    from: 0,
    to: 1,
    frame,
  });
 
  return (
    <div>
      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: "7em",
          opacity: opacity,
        }}
      >
        The current frame is {frame}. This {width}px x {height}px video is {durationInFrames / fps} seconds long.
        <div style={{ transform: `scale(${scale})` }}>Hello World!</div>
      </div>
      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontSize: "7em",
          opacity: opacity,
        }}
      >
        The current frame is {frame}. This {width}px x {height}px video is {durationInFrames / fps} seconds long.
        <div style={{ transform: `scale(${scale})` }}>Hello World!</div>
      </div>
    </div>
  );
};