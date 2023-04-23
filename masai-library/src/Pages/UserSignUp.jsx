import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/UserAuth/action";
import { REGISTER_FAILURE, REGISTER_SUCCESS } from "../Redux/UserAuth/actionType";
function reducer(state, action) {
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  username: "",
  email: "",
  password: "",
  // phone: "",
};

const UserSignUp = () => {
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const signupHandler = () => {
    alert("Register Succefuly")
    navigate("/user/login");

    dispatch(register(state)).then((r) => {
      
      if (r === REGISTER_SUCCESS) {
        navigate("/user/login");
      } else if (r === REGISTER_FAILURE) {
        alert("Wrong Input")
      }
    });

  };


  return (
    <Box height="110vh" bg="#ffffff">
      <Box
        width="1150px"
        position="center"
        margin="auto"
        padding="20px 0px 80px 0px"
        height="900px"
      >
        <Box width="20%" textAlign="left"></Box>
        <Box width="100%" padding="20px 0px 20px">
          <Heading as="h3" textAlign="center">
            Sign Up
          </Heading>
        </Box>

        <Box width="50%" margin="0 auto" padding="50px 0px 0px 0px">
          <Stack spacing={4}>
            <Box background="none" color="none">
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={state.username}
                  onChange={(e) =>
                    setter({ type: "username", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) =>
                    setter({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box></Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                
                  <Input
                    type={"password"}
                    value={state.password}
                    onChange={(e) =>
                      setter({ type: "password", payload: e.target.value })
                    }
                  />
                
              </FormControl>
            </Box>
          </Stack>
          <Button
            color="black"
            onClick={signupHandler}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export {UserSignUp};