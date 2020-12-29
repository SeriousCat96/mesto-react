import React from 'react';

function Popup(props) {
  const { id, children, isActive, viewClass } = props;
  
  console.log("render popup");

  return (
    <section className = {`popup${isActive ? " popup_active" : ""}`} id = { id }>
      <div className = {`${viewClass} popup__view`}>
        {children}
      </div>
    </section>
  );
}

export default React.memo(Popup,
  (props, nextProps) => props.isActive === nextProps.isActive);