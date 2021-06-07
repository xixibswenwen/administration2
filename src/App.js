import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  }
}));

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 117
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  }
}));

function createData(
  RoomID,
  RoomTemp,
  Online,
  State,
  Mode,
  Speed,
  TargetTemp,
  CurFee,
  TotalFee
) {
  return {
    RoomID,
    RoomTemp,
    Online,
    State,
    Mode,
    Speed,
    TargetTemp,
    CurFee,
    TotalFee
  };
}

export default function BasicTable() {
  const classes = useStyles();
  const classes2 = useStyles2();

  const [open, setOpen] = React.useState(false);
  const [tempt, setTempt] = React.useState("");
  const [speed, setSpeed] = React.useState("");
  const [Ctemp, setCTemp] = React.useState("");
  const [Wtemp, setWTemp] = React.useState("");
  const [Room, setRoom] = React.useState("");

  const rows = [
    createData("Room_301", 26, "Yes", "ON", "Warm", "High", 26, 5, 20)
  ];
  const Changetempt = (event) => {
    setTempt(event.target.value);
  };

  const Changespeed = (event) => {
    setSpeed(event.target.value);
  };

  const ChangeCtemp = (event) => {
    setCTemp(event.target.value);
  };

  const ChangeWtemp = (event) => {
    setWTemp(event.target.value);
  };

  const ChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box p="1rem">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={handleClickOpen}>SETTING</Button>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>SETTING</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="Mode-label">Mode</InputLabel>
                  <Select
                    labelId="Mode-label"
                    id="Mode"
                    value={tempt}
                    onChange={Changetempt}
                    label="tempt"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Cold</MenuItem>
                    <MenuItem value={20}>Warm</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="TempRangelabel">TempRange</InputLabel>
                  <Select
                    labelId="TempRangelabel"
                    id="TempRange"
                    value={tempt}
                    onChange={Changetempt}
                    label="tempt"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>18-26</MenuItem>
                    <MenuItem value={20}>26-30</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="temptlabel">ColdTemp</InputLabel>
                  <Select
                    labelId="temptlabel"
                    value={Ctemp}
                    id="tempt"
                    onChange={ChangeCtemp}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={11}>18</MenuItem>
                    <MenuItem value={12}>19</MenuItem>
                    <MenuItem value={13}>20</MenuItem>
                    <MenuItem value={14}>21</MenuItem>
                    <MenuItem value={15}>22</MenuItem>
                    <MenuItem value={16}>23</MenuItem>
                    <MenuItem value={17}>24</MenuItem>
                    <MenuItem value={18}>25</MenuItem>
                    <MenuItem value={19}>26</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="temptlabel">WarmTemp</InputLabel>
                  <Select
                    labelId="temptlabel"
                    value={Wtemp}
                    id="tempt"
                    onChange={ChangeWtemp}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={19}>26</MenuItem>
                    <MenuItem value={21}>27</MenuItem>
                    <MenuItem value={22}>28</MenuItem>
                    <MenuItem value={23}>29</MenuItem>
                    <MenuItem value={24}>30</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="speedlabel">Speed</InputLabel>
                  <Select
                    labelId="speedlabel"
                    value={speed}
                    id="speed"
                    onChange={Changespeed}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>High</MenuItem>
                    <MenuItem value={2}>Middle</MenuItem>
                    <MenuItem value={3}>Low</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes2.formControl}
                >
                  <InputLabel id="speedlabel">Feerate</InputLabel>
                  <Select
                    labelId="speedlabel"
                    value={speed}
                    id="speed"
                    onChange={Changespeed}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>3</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>1</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes2.formControl}
                >
                  <InputLabel id="speedlabel">Servers</InputLabel>
                  <Select
                    labelId="speedlabel"
                    value={Room}
                    id="speed"
                    onChange={ChangeRoom}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Button>EXIT</Button>
        </ButtonGroup>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>RoomID</TableCell>
              <TableCell align="right">RoomTemp</TableCell>
              <TableCell align="right">Online</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Mode</TableCell>
              <TableCell align="right">Speed</TableCell>
              <TableCell align="right">TargetTemp</TableCell>
              <TableCell align="right">CurFee</TableCell>
              <TableCell align="right">TotalFee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.RoomID}>
                <TableCell component="th" scope="row">
                  {row.RoomID}
                </TableCell>
                <TableCell align="right">{row.RoomTemp}</TableCell>
                <TableCell align="right">{row.Online}</TableCell>
                <TableCell align="right">{row.State}</TableCell>
                <TableCell align="right">{row.Mode}</TableCell>
                <TableCell align="right">{row.Speed}</TableCell>
                <TableCell align="right">{row.TargetTemp}</TableCell>
                <TableCell align="right">{row.CurFee}</TableCell>
                <TableCell align="right">{row.TotalFee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
