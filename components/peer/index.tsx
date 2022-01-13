import {
    selectVideoTrackByPeerID,
    useHMSActions,
    useHMSStore
  } from "@100mslive/hms-video-react";
import { useRef, useEffect } from "react";
  
type Peer = {
  id: string,
  isLocal: boolean,
  name: string
}

type PeerPropsType = {
  peer: Peer
}

function Peer({ peer }: PeerPropsType) {
  const videoRef = useRef(null);
  const hmsActions = useHMSActions();
  const videoTrack = useHMSStore(selectVideoTrackByPeerID(peer.id));

    useEffect(() => {
    if (videoRef.current && videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoRef.current);
      } else {
        hmsActions.detachVideo(videoTrack.id, videoRef.current);
      }
    }
  }, [videoTrack, hmsActions]);

  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}
  
export default Peer;