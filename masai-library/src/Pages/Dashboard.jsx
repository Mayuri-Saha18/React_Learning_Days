import {
  Button,
  FormLabel,
  Image,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
import {
  addData,
  deleteData,
  getAllData,
  updateData,
} from "../Redux/DashboardRedux/action";

export const Dashboard = () => {
  const adminData = useSelector((store) => store.DashBoardReducer.adminData);
  const dispatch = useDispatch();
  const [book_name, setBook_name] = useState("");
  const [image_url, setImage_url] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");
  const [cost, setCost] = useState(0);
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const handleAddData = (e) => {
    e.preventDefault();
    let newData = {
      book_name,
      image_url,
      author,
      edition,
      genre,
      publisher,
      cost,
      borrowed,
    };

    dispatch(addData(newData)).then((res) => {
      dispatch(getAllData);
      alert("Book Added");
    });

    setBook_name("");
    setAuthor("");
    setImage_url("");
    setEdition("");
    setGenre("");
    setPublisher("");
    setCost("");
    setBorrowed(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getAllData);
      alert("Book Deleted");
    });
  };

  const handleEdit = (id) => {
    let editData = {
      id,
      book_name,
      image_url,
      author,
      edition,
      genre,
      publisher,
      cost,
      borrowed,
    };
    dispatch(updateData(editData)).then(() => {
      dispatch(getAllData);
    });
  };

  return (
    <>

      <div style={{ width: "40%", margin: "auto" }}>
        <h3
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
        >
          ADD Book
        </h3>

        <form onSubmit={handleAddData} margin="auto">
          <FormLabel>Book Name</FormLabel>
          <Input
            type="text"
            value={book_name}
            onChange={(e) => setBook_name(e.target.value)}
          />
          <FormLabel>Book Image</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
          <FormLabel>Author</FormLabel>
          <Input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <FormLabel>Edition</FormLabel>
          <Select
            placeholder="Edition"
            name="edition"
            onChange={(e) => setEdition(e.target.value)}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </Select>
          <FormLabel>Genre</FormLabel>
          <Select
            placeholder="Genre"
            name="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </Select>
          <FormLabel>Publisher</FormLabel>
          <Input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <FormLabel>Cost</FormLabel>
          <Input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />

          <Input
            type={"submit"}
            border="1px solid black"
            fontSize={"20px"}
            marginBottom="35px"
            cursor={"pointer"}
          />
        </form>
      </div>


      <div>
        <TableContainer ml={"200px"}>
          <Table variant="striped" colorScheme="teal">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th color="white">S. No.</Th>
                <Th color="white">Book Name</Th>
                <Th color="white" isNumeric>
                  Cost
                </Th>
                <Th color="white">Book Image</Th>
                <Th color="white">Edition</Th>
                <Th color="white">Genre</Th>
                <Th color="white">Publisher</Th>
                <Th color="white">EDIT</Th>
                <Th color="white">DELETE</Th>
              </Tr>
            </Thead>
            {adminData.map((el) => {
              return (
                <Tbody>
                  <Tr>
                    <Td>{el.id} </Td>
                    <Td> {el.book_name}</Td>
                    <Td isNumeric>Price : {el.cost} </Td>
                    <Td>
                      <Image
                        rounded={"lg"}
                        height={250}
                        objectFit={"cover"}
                        src={el.image_url}
                      />
                    </Td>
                    <Td> {el.author}</Td>
                    <Td> {el.edition}</Td>
                    <Td> {el.genre}</Td>
                    <Td> {el.publisher}</Td>
                    <Td>
                      <Button
                        border={"1px solid gray"}
                        onClick={() => handleEdit(el.id)}
                      >
                        EDIT
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        border={"1px solid gray"}
                        onClick={() => handleDelete(el.id)}
                      >
                        DELETE
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
