export default function BookCard(data) {
  return (
    <div data-testid='book-card' style={{width:"90%" ,border:"1px solid black"}}>
        <img src={data.img} alt={"alt"} style={{width:"90%"}}/>
        <b><div data-testid='book-card-title'>{data.title}<span>({data.year})</span></div></b>
        <div data-testid='book-card-author'>{data.author}</div>
        <div data-testid='book-card-price'>{data.price}</div>
    </div>
  )
}

