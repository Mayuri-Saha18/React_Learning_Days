function Pagination({total,onChange,current}) {

  let pages=new Array(total).fill(0).map((item,index)=>
  <button disabled={current===index+1}
    onClick={()=>onChange(index+1)}
    key={`page-${index+1}`}>
{index+1}
    </button>
  )
  return (
  <div data-testid = "page-container">
    
   {pages}
    
  </div>
 
  );
  
}

export default Pagination;
