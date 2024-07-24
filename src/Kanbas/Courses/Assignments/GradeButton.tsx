import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

export default function GradeButton() {
  return (
    <div className="float-end">
        40% of Total
        <BsPlusLg />
        <IoEllipsisVertical className="fs-4" />
    </div>
    
);
}