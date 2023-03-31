import Source from "./Source"

function List({list, setList, deleteSource})
{
    let num_entries = 0;
    let sourceList = list.map((item, i) => { //each element of sourceList is a Source component based on an element of list
      return (
        <Source num = {num_entries++} source_info = {{name: list[i].name, email: list[i].email}} setter = {setList}/>
      );
    });

    return(
        <div id = "source_div">
          {sourceList}
        </div>
    );
}

export default List;