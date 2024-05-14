import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../redux/users/action";
import { v4 as uuidv4 } from "uuid";

const Users = () => {
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: "",
    name: "",
    gender: "",
    age: "",
    birthday: "",
    img: "",
  });

  const handelCreate = (e) => {
    let id = uuidv4();

    setUser({
      ...user,
      id: id,
      [e.target.name]: e.target.value,
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [openupdate, setOpenUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <main>
        <section className="w-full p-12 h-[20vh] bg-[#f1f1f1]">
          <Button onClick={handleOpen} variant="contained" size="large">
            Create User
          </Button>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <TextField
                    name="name"
                    onChange={(e) => handelCreate(e)}
                    className="w-full"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    onChange={(e) => {
                      handelCreate(e);
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    className="w-full"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user.age}
                    label="Age"
                    name="age"
                    onChange={(e) => handelCreate(e)}
                  >
                    <MenuItem value={12 + ", " + 18}>12,18</MenuItem>
                    <MenuItem value={18 + ", " + 24}>18,24</MenuItem>
                    <MenuItem value={24 + ", " + 32}>24,32</MenuItem>
                  </Select>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <TextField
                    name="birthday"
                    onChange={(e) => handelCreate(e)}
                    className="w-full"
                    id="outlined-basic"
                    label="birthday"
                    variant="outlined"
                  />
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <input
                    type="file"
                    name="img"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        img: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  />
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <Button
                    onClick={() => {
                      console.log(user);
                      dispatch(addUser(user));
                      handleClose();
                    }}
                    variant="contained"
                    size="large"
                  >
                    Create User
                  </Button>
                </Typography>
              </Box>
            </Modal>
            <Modal
              open={openupdate}
              onClose={handleCloseUpdate}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <TextField
                    value={user.name && user.name}
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                    className="w-full"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    onChange={(e) => {
                      setUser({ ...user, gender: e.target.value });
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    className="w-full"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user.age}
                    label="Age"
                    name="age"
                    onChange={(e) => {
                      setUser({ ...user, age: e.target.value });
                    }}
                  >
                    <MenuItem value={12 + " , " + 18}>12,18</MenuItem>
                    <MenuItem value={18 + " , " + 24}>18,24</MenuItem>
                    <MenuItem value={24 + " , " + 32}>24,32</MenuItem>
                  </Select>
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <input
                    type="file"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        img: URL.createObjectURL(e.target.files[0]),
                      })
                    }
                  />
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                  <Button
                    onClick={() => {
                      dispatch(updateUser(user));
                      handleCloseUpdate();
                    }}
                    variant="contained"
                    size="large"
                  >
                    Create User
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </div>
        </section>

        <section className="p-12 pt-0">
          <div className="bg-[#3b444f] h-[50px] w-full rounded-md text-white uppercase flex items-center">
            <div className="w-[20%] pl-4">name</div>
            <div className="w-[20%] pl-4">gender</div>
            <div className="w-[20%] pl-4">birthday</div>
            <div className="w-[20%] pl-4">age</div>
            <div className="w-[20%] pl-4"></div>
          </div>

          {users &&
            users.map((user) => {
              return (
                <div className="w-full h-[50px] rounded-md text-[#3b444f] uppercase flex">
                  <div className="w-[20%] pl-4 h-full border flex items-center">
                    <img
                      className="w-[35px] h-[35px] rounded-full mr-4"
                      src={user.img}
                      alt=""
                    />
                    {user.name}
                  </div>
                  <div className="w-[20%] pl-4 h-full flex items-center border">
                    {user.gender}
                  </div>
                  <div className="w-[20%] pl-4 h-full flex items-center border">
                    {user.birthday}
                  </div>
                  <div className="w-[20%] pl-4 h-full flex items-center border">
                    {user.age}
                  </div>
                  <div className="w-[20%] pl-4 h-full flex items-center border">
                    <EditIcon
                      onClick={() => handleOpenUpdate()}
                      className="mr-3 cursor-pointer text-[#03a8a5]"
                    />
                    <CancelIcon
                      onClick={() => dispatch(deleteUser(user))}
                      className="text-[#f05e5d] cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default Users;
