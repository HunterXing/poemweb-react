/*
 * @description: 工程列表
 * @Date: 2022-02-09 20:38:09
 * @LastEditTime: 2022-04-24 21:30:41
 * @Author: xingheng
 */

import { Fragment, useEffect, useState } from "react";
// import http from "api/http";
import SearchPanel from "./SearchPanel";
import TableList from "./TableList";
import useMount from "hooks/useMount";
import useDebounce from "hooks/useDebounce";

export interface SearchParmProps {
  pageSize: number;
  pageIndex: number;
  name: string;
  deptId: number;
}

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    deptId: 0,
    pageSize: 10,
    pageIndex: 1,
  });
  const [depts, setDepts] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param);

  // useMount(() => {
  //   http.get("/dept/list").then((res) => {
  //     setDepts(res.data.list);
  //   });
  // });

  // useEffect(() => {
  //   http
  //     .post("/user/list", {
  //       ...debounceParam,
  //     })
  //     .then((res) => {
  //       setUsers(res.data.list);
  //     });
  // }, [debounceParam]);

  return (
    <Fragment>
      <SearchPanel param={param} setParam={setParam} depts={depts} />
      <TableList users={users} />
    </Fragment>
  );
};

export default ProjectList;
