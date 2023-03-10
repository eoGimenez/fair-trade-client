import "./SignupPage2.css";
import bgvideo from "./ceramica.mp4"

function SignupPage2() {
  return (
    <div>
      <body>
        <video
          src={bgvideo}
          autoplay="true"
          muted="true"
          loop="true"
          poster="https://images.unsplash.com/photo-1568562764054-8783070ce2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        ></video>
      </body>
    </div>
  );
}

export default SignupPage2;

// https://vod-progressive.akamaized.net/exp=1678411775~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3341%2F18%2F466707807%2F2072010208.mp4~hmac=dfef6b4d48998db297f785b77c35af2941d1919140d8a4eee950c592ef5ae885/vimeo-prod-skyfire-std-us/01/3341/18/466707807/2072010208.mp4