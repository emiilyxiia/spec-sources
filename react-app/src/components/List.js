import Source from "./Source"

function List({list, setList, deleteSource})
{
    let num_entries = 0;
    return(
        <div id = "source_div">
          <Source num = {++num_entries} source_info = {{name: list[0].listName, email: list[0].listEmail}} deleteSource = {deleteSource}/>
          <Source num = {++num_entries} source_info = {{name: list[1].listName, email: list[1].listEmail}} deleteSource = {deleteSource}/>
          <Source num = {++num_entries} source_info = {{name: list[2].listName, email: list[2].listEmail}} deleteSource = {deleteSource}/>
      </div>
    );
}

export default List;