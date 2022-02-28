/*
 * @description:
 * @Date: 2022-02-09 20:39:49
 * @LastEditTime: 2022-02-09 20:39:50
 * @Author: xingheng
 */
import { userProps } from "./SearchPanel";

const TableList = ({ users }: { users: userProps[] }) => {
  return (
    <table>
      <th>
        <td>姓名</td>
        <td>部门</td>
      </th>
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.deptName}</td>
        </tr>
      ))}
    </table>
  );
};
export default TableList;
