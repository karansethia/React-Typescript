import {ReactNode} from "react";

type hintBox = {
  mode: "hint";
  children: ReactNode;
};

type warningBox = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = warningBox | hintBox;

const InfoBox = (props: InfoBoxProps) => {
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint warning--high">
        <p>{props.children}</p>
      </aside>
    );
  } else {
    return (
      <aside className={`infobox infobox-warning warning--${props.severity}`}>
        <h2>Warning</h2>
        <p>{props.children}</p>
      </aside>
    );
  }
};

export default InfoBox;
