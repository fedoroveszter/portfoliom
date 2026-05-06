export default function Alert(props) {
  let containerClass = "flex p 4 rounded lg mb 4 ";
  if (props.type === "success") {
    containerClass += "bg green 50 text green 800";
  }
  if (props.type === "error") {
    containerClass += "bg red 50 text red 800";
  }
  if (props.type === "warning") {
    containerClass += "bg yellow 50 text yellow 800";
  }
  if (props.type === "info") {
    containerClass += "bg blue 50 text blue 800";
  }
  return (
    <div className={containerClass}>
      {" "}
      <div>
        {" "}
        <h3 className="font medium">{props.title}</h3>{" "}
        <div className="text sm opacity 90">{props.message}</div>{" "}
      </div>{" "}
    </div>
  );
}
