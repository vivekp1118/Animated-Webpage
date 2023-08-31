function ImprovementCard(props) {
  return (
    <div className="flex flex-shrink-0 flex-col">
      <p className="font-semibold text-xl mb-3">{props.header}</p>
      <p className="font-medium text-base">{props.desc}</p>
    </div>
  );
}

export default ImprovementCard;
