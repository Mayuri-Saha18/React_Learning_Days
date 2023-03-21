import Button from "../common/Button";
import { useRef } from "react";

function VideoPlayer() {
  const ref = useRef(null);
  // const ref = {current:null};
  const handleClick = () => {
    ref.current.play();
  };
  return (
    <div>
      <video data-testid="video-container" ref={ref} width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button onClick={handleClick}>PLAY</Button>
        <Button
          onClick={() => {
            ref.current.pause();
          }}
        >
          PAUSE
        </Button>
        <Button
          onClick={() => {
            const time = ref.current.currentTime;
            ref.current.currentTime = time + 30;
          }}
          // disabled={ref.current.Duration - ref.current.currentTime < 30}
        >
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
