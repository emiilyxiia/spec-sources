import Source from "./Source"

function List()
{
    let num_entries = 0;
    return(
        <div id = "source_div">
          <Source num = {++num_entries} source_info = {{name: "Presbo", email: "presbo@columbia.edu"}}/>
          <Source num = {++num_entries} source_info = {{name: "John Jay Mouse", email: "mouse@columbia.edu"}}/>
          <Source num = {++num_entries} source_info = {{name: "Water Bottle Man", email: "flipper@columbia.edu"}}/>
      </div>
    );
}

export default List;