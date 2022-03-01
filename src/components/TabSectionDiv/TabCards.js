function TabCards(props) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div className="cards mt-5">Cards for {props.children}</div>
        <div className="cards mt-5">Cards for {props.children}</div>
        <div className="cards mt-5">Cards for {props.children}</div>
        <div className="cards mt-5">Cards for {props.children}</div>
        <div className="cards mt-5">Cards for {props.children}</div>
        <div className="cards mt-5">Cards for {props.children}</div>
      </div>
    </div>
  );
}

export default TabCards;
