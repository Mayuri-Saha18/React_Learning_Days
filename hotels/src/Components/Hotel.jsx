
import { Select, Flex, Heading, Box, Image, Button } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getData, sortData } from "../Redux/actions";

export default function Hotel() {
  const dispatch = useDispatch();
  const rooms = useSelector((store) => store.rooms);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(4);


  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    let data = await fetch("https://mocking.onrender.com/hotels");
    data = await data.json();
    dispatch(getData(data));
    console.log(data);
  }
  

  async function filterRoom(e) {
    let value = e.target.value;
    let res = await fetch(`https://mocking.onrender.com/hotels${value ? `?category=${value}` : ''}`);//only for filter by rooms `https://mocking.onrender.com/hotels?category=${value}`
    res = await res.json()
      
      setFilteredRooms(res);
      dispatch(filterData(res));
      setCurrentPage(1); 

  }

  function sortRoom(e) {
    let sortBy = e.target.value;
    let sortedData = [...rooms];

    if (sortBy == "asc") {
      sortedData.sort((a, b) => {
        return a.cost - b.cost;
      });
    }

    if (sortBy == "desc") {
      sortedData.sort((a, b) => {
        return b.cost - a.cost;
      });
    }

    dispatch(sortData(sortedData));
    setFilteredRooms(sortedData);
    setCurrentPage(1); 
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);

  return (
    <Flex w={"100vw"} flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
        <Select
          placeholder="Filter by category"
          width="300px"
          mr="2rem"
          onChange={filterRoom}
        >
          <option value="">All</option>
          <option value="Family">Family</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </Select>

        <Select placeholder="Sort by price" width="300px" onChange={sortRoom}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Flex>

      <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
      
        {currentRooms.map((el, index) => {
          return (
            <Box
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              p={"1rem"}
              m={"1rem"}
              key={index}
            >
              <Image
                src={el.image_url}
                alt="room"
                w={"400px"}
                h={"250px"}
              ></Image>
              <Box>
                <Heading m={"1rem 0"} size={"md"}>
                  {el.category.toUpperCase()} ROOM
                </Heading>
                <p>Type of Room : {el.type_of_room}</p>
                <p>Bed : {el.bed_type}</p>
                <p>Category : {el.category}</p>
                <p>No. of Adults : {el.no_of_persons}</p>
                <p>Capacity : {el.capacity}</p>
                <p>Cost : Rs. {el.cost}</p>
                <Button variant="solid" colorScheme={"teal"} m={"1rem 0"}>
                  Book Now
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
      <Flex justifyContent="center" m="2rem">
      <Button
        variant="solid"
        colorScheme="teal"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        mr="1rem"
      >
        Previous
      </Button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Button
        variant="solid"
        colorScheme="teal"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        ml="1rem"
      >
        Next
      </Button>
    </Flex>
    </Flex>
  );
}


//without pagination

// import { Select, Flex, Heading, Box, Image, Button } from "@chakra-ui/react";
// import { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filterData, getData, sortData } from "../Redux/actions";

// export default function Hotel() {
//   const dispatch = useDispatch();
//   const rooms = useSelector((store) => store.rooms);
//   const [filteredRooms, setFilteredRooms] = useState([]);
;


//   useEffect(() => {
//     apiCall();
//   }, []);

//   async function apiCall() {
//     let data = await fetch("https://mocking.onrender.com/hotels");
//     data = await data.json();
//     dispatch(getData(data));
//     console.log(data);
//   }
  

//   async function filterRoom(e) {
//     let value = e.target.value;
//     let res = await fetch(`https://mocking.onrender.com/hotels${value ? `?category=${value}` : ''}`);//only for filter by rooms `https://mocking.onrender.com/hotels?category=${value}`
//     res = await res.json()
      
//       setFilteredRooms(res);
//       dispatch(filterData(res));
//       

//   }

//   function sortRoom(e) {
//     let sortBy = e.target.value;
//     let sortedData = [...rooms];

//     if (sortBy == "asc") {
//       sortedData.sort((a, b) => {
//         return a.cost - b.cost;
//       });
//     }

//     if (sortBy == "desc") {
//       sortedData.sort((a, b) => {
//         return b.cost - a.cost;
//       });
//     }

//     dispatch(sortData(sortedData));
//     setFilteredRooms(sortedData);
//     
//   }

//   return (
//     <Flex w={"100vw"} flexDirection={"column"}>
//       <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
//         <Select
//           placeholder="Filter by category"
//           width="300px"
//           mr="2rem"
//           onChange={filterRoom}
//         >
//           <option value="">All</option>
//           <option value="Family">Family</option>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Suite">Suite</option>
//         </Select>

//         <Select placeholder="Sort by price" width="300px" onChange={sortRoom}>
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </Select>
//       </Flex>

//       <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
      
//         {rooms.map((el, index) => {
//           return (
//             <Box
//               boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
//               p={"1rem"}
//               m={"1rem"}
//               key={index}
//             >
//               <Image
//                 src={el.image_url}
//                 alt="room"
//                 w={"400px"}
//                 h={"250px"}
//               ></Image>
//               <Box>
//                 <Heading m={"1rem 0"} size={"md"}>
//                   {el.category.toUpperCase()} ROOM
//                 </Heading>
//                 <p>Type of Room : {el.type_of_room}</p>
//                 <p>Bed : {el.bed_type}</p>
//                 <p>Category : {el.category}</p>
//                 <p>No. of Adults : {el.no_of_persons}</p>
//                 <p>Capacity : {el.capacity}</p>
//                 <p>Cost : Rs. {el.cost}</p>
//                 <Button variant="solid" colorScheme={"teal"} m={"1rem 0"}>
//                   Book Now
//                 </Button>
//               </Box>
//             </Box>
//           );
//         })}
//       </Flex>

//     </Flex>
//   );
// }
