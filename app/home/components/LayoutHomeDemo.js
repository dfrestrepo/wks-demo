import "./LayoutHomeDemo.scss";

const LayoutHomeDemo = ({children}) => {
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
};

export default LayoutHomeDemo;
