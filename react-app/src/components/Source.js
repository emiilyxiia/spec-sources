function Source({source_info,num},setter)
{
    const deleteSource = value => {
        {setter}(oldValues => {
          return oldValues.filter(item => item !== value)
        })
      }

    return(
    <div className = "source">
          <span className = "number">{num+1}</span>
          <span className = "source_name">{source_info.name}</span>
          <span className = "source_email">{source_info.email}</span>
          <button onClick={() => deleteSource({num})} className = "button" id = "delete" type="button">DELETE</button>
    </div>
    )
}