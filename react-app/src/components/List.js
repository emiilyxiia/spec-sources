function List()
{
    return(
        <div id = "source_div">
        <div className = "source">
          <span className = "number">1</span>
          <span className = "source_name">Presbo</span>
          <span className = "source_email">presbo@columbia.edu</span>
          <button className = "button" id = "delete" type="button">DELETE</button>
        </div>
        <div className = "source">
          <span className = "number">2</span>
          <span className = "source_name">John Jay Mouse</span>
          <span className = "source_email">mouse@columbia.edu</span>
          <button className = "button" id = "delete" type="button">DELETE</button>
        </div>
        <div className = "source">
          <span className = "number">1</span>
          <span className = "source_name">Water Bottle Man</span>
          <span className = "source_email">flipper@columbia.edu</span>
          <button className = "button" id = "delete" type="button">DELETE</button>
        </div>

      </div>
    );
}

export default List;