export default Source;

function Source({source_info, num, deleteSource})
{
    
    return(
    <div className = "source">
          <span className = "number">{num+1}</span>
          <span className = "source_name">{source_info.name}</span>
          <span className = "source_email">{source_info.email}</span>
          <button onClick={() => deleteSource(num)} className = "button" id = "delete" type="button">DELETE</button>
    </div>

    )
}