function Source({source_info,num},{list, setList})
{
    function deleteSource(source){
        //delete logic
        
      }
    
    return(
    <div className = "source">
          <span className = "number">{num}</span>
          <span className = "source_name">{source_info.name}</span>
          <span className = "source_email">{source_info.email}</span>
          <button onClick={() => deleteSource} className = "button" id = "delete" type="button">DELETE</button>
    </div>

    )
}

export default Source;