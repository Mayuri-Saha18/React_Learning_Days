
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/UserAuth/action";
import { LOGIN_SUCCESS } from "../Redux/UserAuth/actionType";

const UserLogin = () => {

  const toast = useToast()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => (state.UserReducer.isLoading));

  const loginHandler = () => {
    alert("Login Succefully")
    
    navigate("/user/bookpage");

    if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params)).then((res) => {
        if (res === LOGIN_SUCCESS) {
          navigate("/user/bookpage");
          alert("A")
        } else {
        }
      });
    }
  };

  return (
    <Box>
      <Box>
        <Box>
          <Stack spacing={4}>
            <Box>
              <FormControl>
                <FormLabel>Email address *</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Password *</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Box>
          </Stack>
          <Button
            onClick={loginHandler}
            isLoading={isLoading}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export {UserLogin};