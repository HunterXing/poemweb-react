/*
 * @description:
 * @Date: 2022-02-09 20:41:06
 * @LastEditTime: 2022-02-09 20:48:24
 * @Author: xingheng
 */
import { Fragment } from "react";
import { SearchParmProps } from "./index";
export interface userProps {
  id: number;
  name: string;
  deptId: number;
  deptName: string;
}

export interface deptProps {
  id: number;
  deptName: string;
}

const SearchPanel = ({
  param,
  setParam,
  depts,
}: {
  param: SearchParmProps;
  setParam: ({}: SearchParmProps) => void;
  depts: deptProps[];
}) => {
  return (
    <Fragment>
      <input
        type="text"
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <select
        onChange={(evt) =>
          setParam({
            ...param,
            deptId: Number(evt.target.value),
          })
        }
      >
        <option value={""}>{"全部"}</option>
        {depts.map((dept: deptProps) => (
          <option value={dept.id} key={dept.id}>
            {dept.deptName}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
export default SearchPanel;
