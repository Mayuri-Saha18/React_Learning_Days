import React from "react"
import BookCard from "./BookCard";



export default function NonFiction({item}) {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container" style={{display:"grid",margin:"auto",gridTemplateColumns:"repeat(3,1fr)"}}>
        {/* Display all Non-Fiction books here */}
        {item.map((items)=>(
          <BookCard {...items}/>
        )
        )}
      </div>
    </div>
  );
}
