import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Checkbox,
  Stack,
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { TransferForm } from '../../components/Form';
import { Page, Section } from '../../components/Page';
import Search from '../../components/Search/Search';
import { SmallButton } from '../../components/Buttons/Button';
import './style.css';

const StyledTableCell = styled(TableCell)({
  borderBottom: 'none',
  textTransform: 'capitalize'
});
  
const StyledTableHead = styled(TableCell)({
  fontWeight: 'bold'
});
  
function createData(id, name, amount, date, status) {
  return {id, name, amount, date, status};
}
  
const rows = [
  createData('1','sara','+90','9/5/2023','completed'),
  createData('2','nermine','-10','9/4/2023', 'reviewed'),
  createData('3','maria','-107','2/2/2023','completed'),
  createData('4','joe','+20','1/1/2023','completed'),
  createData('5','wafa','+1.7','3/3/2022','reviewed'),
  createData('6','mira','-9','9/10/2022','completed'),
  createData('7','malika','-30','9/2/2022','completed'),
  createData('8','ikram','+87','1/2/2021','completed'),
  createData('9','katrina','+20','1/8/2021','completed'),
  createData('10','sofia','-1.7','3/3/2020','completed'),
];
const creditCard = [
    {
      id: 1,
      type: 'mastercard',
      cardNumber: '2555417036958956',
      cardHolder: 'ikram ferhat',
      valid: {m: 10, y: 24}
    },
    {
      id: 2,
      type: 'visacard',
      cardNumber: '2555417036954074',
      cardHolder: 'ikram ferhat',
      valid: {m: 9, y: 25}
    }
];
const Transactions = () => {
  const [liste, setListe] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(null);
  const [checkedAll, setCheckedAll] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedID, setSelectedID] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const selectAll = (value) => {
    setCheckedAll(!checkedAll);
    setChecked((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((inputName) => (newState[inputName] = value));
      return newState;
    });
  };

  const remove = () => {
    console.log('delete=>', selectedID);
    const newList = liste.filter((item) => !selectedID.includes(`${item.id}`));
    setListe(newList);
    console.log('newliste=>', newList);
    console.log('liste=>', liste);
    return liste

  }

  useEffect(() => {
    const array = [];
    for (let i = 0; i < liste.length; i += 1) {
      array.push(liste[i].id);
    }
    const initialState = array.reduce((o, key) => ({ ...o, [key]: false }), {});
    setChecked(initialState);
  }, []);

  useEffect(() => {
    if (checked != null) {
      console.log('uuuuu=>', checked);
      let allChecked = true;
      let singleSelect = false;
      let selectedid = [];
      Object.keys(checked).forEach((inputName) => {
        if(checked[inputName] === false){
          allChecked = false;
        }else{
          singleSelect = true;
          selectedid.push(inputName);
        }
      });
      if(allChecked){
        setCheckedAll(true);
      }else{
        setCheckedAll(false);
      }
      if(singleSelect){
        setVisible(true);
      }else{
        setVisible(false);
      }
      setSelectedID(selectedid)
    }
  }, [checked]);

  return (
    <div id="transactions">
      <Container maxWidth="xl">
        <Page>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <div className='title'>
              <h3>Transactions</h3>
            </div>
            <div className='sr-btn' >
              <a href="#new-transfer">
                <SmallButton title="new transfer" />
              </a>
            </div>
          </Grid>
          <Grid container sx={{mt: 5}}>
            <Grid item xs={12} md={12} sx={{mt: 2, p: 2}}>
              <Section>
                <Grid item xs={12} sx={{my: 3}}>
                  <div className='search-container'>
                    <Search withShadow endIcon />
                  </div>       
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{px: '16px', minHeight: 50}}>
                    {visible && (
                      <IconButton onClick={() => remove()}>
                        <DeleteIcon style={{ fontSize: "25px", color: '#b00000' }} />
                      </IconButton>
                    )}
                  </Box>
                  <TableContainer >
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <StyledTableHead>
                            <Checkbox
                              checked={checkedAll}
                              onChange={(event) => selectAll(event.target.checked)}
                              sx={{ color: '#35beb1', '&.Mui-checked': { color: '#35beb1' } }}
                            />
                            <span>Name</span>
                          </StyledTableHead>
                          <StyledTableHead>Amount</StyledTableHead>
                          <StyledTableHead>Date</StyledTableHead>
                          <StyledTableHead>Status</StyledTableHead>
                          <StyledTableHead>Actions</StyledTableHead>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {liste.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage)
                        .map((row, index) => { 
                          const isItemSelected = selected.indexOf(row.id) !== -1;
                          return (
                            <TableRow
                              hover
                              key={row.id}
                              tabIndex={-1}
                              role="checkbox"
                              selected={isItemSelected}
                            >
                            <StyledTableCell>
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Checkbox
                                  onChange={() => toggleCheck(row.id)}
                                  checked={checked !== null && checked[row.id]}
                                  sx={{ color: '#35beb1', '&.Mui-checked': { color: '#35beb1' } }}
                                />
                                {row.name}
                              </Stack>
                            </StyledTableCell>
                            <StyledTableCell style={{color: row.amount.charAt(0) === "+" ? '#47C4B8' : "red"}}>
                              {row.amount} $
                            </StyledTableCell>
                            <StyledTableCell>{row.date}</StyledTableCell>
                            <StyledTableCell sx={{color: row.status === "completed" ? '#47C4B8' : '#ffbe0a'}}>
                              {row.status}
                            </StyledTableCell>
                            <StyledTableCell>
                              <SmallButton title="details" />
                            </StyledTableCell>
                          </TableRow>
                        )})}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={liste.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Grid>
              </Section>
            </Grid>
            <Grid item xs={12} md={12} lg={8} sx={{mt: 2, p: 2}}>
              <Section id="new-transfer">
                <div className='title'>
                  <h3>new transfer</h3>
                </div>
                <TransferForm creditCardData={creditCard} />
              </Section>
            </Grid>
          </Grid>
        </Page>
      </Container>
    </div>
  )
}

export default Transactions;
