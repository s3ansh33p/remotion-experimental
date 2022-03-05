import { random, useCurrentFrame, interpolate } from "remotion";
export const Random = ({seed}) => {
    let size = 7;
    const frame = useCurrentFrame();
    let modifier = 1;
    let seedShift = 0;
    if (frame < 20) {
        modifier = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
    } else if (frame > 70) {
        modifier = interpolate(frame, [70, 90], [1, 0], {extrapolateRight: 'clamp'});
    }

    if (frame > 40 && frame < 50) {
        seedShift = interpolate(frame, [40, 50], [0, 1], {extrapolateRight: 'clamp'});
    } else if (frame >= 50) {
        seedShift = 1;
    }
    // No need to use useState
    // returns a size x size matrix of rgb values
    const randomValues = new Array(size).fill(true).map((a, i) => {
        return new Array(size).fill(true).map((a, j) => {
            return random(`${seed}-${i}-${j}-${seedShift}`)*modifier;
        });
    });

 
  return <div style={{
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }}>
    {/* convert randomValues into a 3x3 grid */}
    {randomValues.map((row, i) => {
        return <div key={i} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {row.map((col, j) => {
                return <div key={j} style={{
                    width: "100px",
                    height: "100px",
                    margin: "10px",	
                    backgroundColor: `black`,
                    opacity: col
                }}></div>
            })}
        </div>
        }
    )}
  </div>;
};

export const RandomRGB = ({seed}) => {
    // No need to use useState
    let size = 5;
    // returns a size x size matrix of rgb values
    const randomValues = new Array(size).fill(true).map((a, i) => {
        return new Array(size).fill(true).map((a, j) => {
            return {
                    r: random(`r-${seed}-${i}-${j}`)*255,
                    g: random(`g-${seed}-${i}-${j}`)*255,
                    b: random(`b-${seed}-${i}-${j}`)*255,
                }
        });
    });

 
  return <div>
    {/* convert randomValues into a 3x3 grid */}
    {randomValues.map((row, i) => {
        return <div key={i} style={{display: "flex"}}>
            {row.map((col, j) => {
                return <div key={j} style={{
                    width: "100px",
                    height: "100px",
                    margin: "10px",	
                    backgroundColor: `rgb(${col.r}, ${col.g}, ${col.b})`,
                }}></div>
            })}
        </div>
        }
    )}
  </div>;
};