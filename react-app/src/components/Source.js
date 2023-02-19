function Source({source_info,num})
{
    return(
    <div className = "source">
          <span className = "number">{num}</span>
          <span className = "source_name">{source_info.name}</span>
          <span className = "source_email">{source_info.email}</span>
          <button className = "button" id = "delete" type="button">DELETE</button>
        </div>

    )
}

export default Source;