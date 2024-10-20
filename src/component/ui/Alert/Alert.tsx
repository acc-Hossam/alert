
import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
interface Iprops {
    type:string;
    headerIcon:ReactNode;
    title:string;

}
const Alert = ({type,headerIcon,title}:Iprops) => {
  return (
    <div className={type} >
      <div className="alert-header ">
        <div className="title">
          <span>
          {headerIcon}
          </span>
          <h4>{title}</h4>
        </div>

        <span>
          <X className="close" size={30} />
        </span>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, alias
        dolore! Distinctio vel necessitatibus itaque similique voluptate
        doloribus
      </p>
    </div>
  );
};

export default Alert;
