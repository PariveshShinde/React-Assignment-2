function Table(props) {
  if (props.data.length !== 0) {
    return (
      <div className="table-container">
        <table id="table">
          <tr>
            <th className="userid">User Id</th>
            <th className="title">Title</th>
            <th className="body">Body</th>
          </tr>
          {props.data.map((element) => {
            return (
              <tr>
                <td className="userid">{element.id}</td>
                <td className="title">{element.title}</td>
                <td className="body">{element.body}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Table;
