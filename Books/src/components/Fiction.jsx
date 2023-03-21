import React from "react"
import BookCard from "./BookCard";





export default function Fiction({item}) {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container" style={{display:"grid",margin:"auto",gridTemplateColumns:"repeat(3,1fr)"}}>
        {/* Map all Fictional Books here */}
        {item.map((items)=>(
          <BookCard {...items}/>
        )
        )}
      </div>
    </div>
  );
}
