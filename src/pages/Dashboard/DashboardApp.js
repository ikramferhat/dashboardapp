import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Search from '../../components/Search/Search';
import { CreditCard, SimpleCard, MoneyCard } from '../../components/Card';
import { LineChart, PieChart } from '../../components/Chart';
import { TransferForm } from '../../components/Form';
import { SmallButton, LargeButton } from '../../components/Buttons/Button';
import { InputDate } from '../../components/Form/Input';
import { RightSidebar } from '../../components/Sidebar';
import { Page, Section } from '../../components/Page';
import { PieChartDATA, LineChartDATA } from '../../components/Chart/CHARTDATA';
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
];

const creditCard = [
  {
    id: 1,
    type: 'card-type',
    cardNumber: '2555417036958956',
    cardHolder: 'username',
    valid: {m: 10, y: 24},
    currentBalance: '2000'
  },
  {
    id: 2,
    type: 'card-type',
    cardNumber: '2555417036954074',
    cardHolder: 'username',
    valid: {m: 9, y: 25},
    currentBalance: '200'
  }
];

const DashboardApp = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const toggleSidePaper = (item) =>{
    setOpen(!open)
    if(item) setData(item)
    if(!open) {
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      document.getElementsByTagName("body")[0].style.paddingRight = '15px';
    }else {
      document.getElementsByTagName("body")[0].style.overflow = 'auto';
      document.getElementsByTagName("body")[0].style.paddingRight = '0px';
    }
  }

  return (
    <div id="dashboard">
      <Container maxWidth="xl">
      <Page>
        <Grid container xs={12} display="flex" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <div className='title'>
              <h3>welcom back!</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} sx={{mt:2}}>
            <Search endIcon />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']} sx={{maxWidth: 200, p: 0}}>
              <InputDate placeholder={'"month" and "year"'} views={['day', 'month', 'year']} />
            </DemoContainer>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 4}}>
          {creditCard.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} sx={{p: 1}}>
                <CreditCard
                  key={item.id}
                  type={item.type}
                  cardHolder={item.cardHolder}
                  cardNumber={item.cardNumber}
                  currentBalance={item.currentBalance}
                  valid={item.valid}
                  click={() => {toggleSidePaper(item)}}
                  amount
                />
              </Grid>
            )
          })}
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className='card-more'>
              <SmallButton title="add new card" />
              <Link to="cards">
                <p>see more cards</p>
                <ArrowForwardIcon className='arrow-icon' color="red" />
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 2}}>
          <Grid item xs={12} sm={6} md={3}>
            <SimpleCard money title="total balance" value={2200} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SimpleCard title="total transactions" value={200} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SimpleCard title="Total transactions in this month" value={5} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SimpleCard title="Number of cards" value={3} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SimpleCard money title="credit Limit" value={2000} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MoneyCard income percent={20} value={200} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MoneyCard value={150} percent={10} />
          </Grid>
        </Grid>
        <Grid container sx={{mt: 5}}>
          <Grid item xs={12} md={12} lg={6} sx={{mt: 2,p: 2}}>
            <div className='chart-container'>
              <Section>
                <div className='title'>
                  <h3>exchange rates</h3>
                </div>
                <LineChart data={LineChartDATA} />
             </Section>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6} sx={{mt: 2,p: 2}}>
            <div className='chart-container'>
              <Section>
                <div className='title'>
                  <h3>activity</h3>
                </div>
                <PieChart data={PieChartDATA} />
              </Section>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{mt: 5}}>
          <Grid item xs={12} md={12} lg={7} sx={{mt: 2, p: 2}}>
            <Section>
              <Grid item xs={12}>
                <div className='title'>
                  <h3>recent transactions</h3>
                </div>
                <TableContainer  sx={{ maxHeight: 500 }}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <StyledTableHead>Name</StyledTableHead>
                        <StyledTableHead>Amount</StyledTableHead>
                        <StyledTableHead>Date</StyledTableHead>
                        <StyledTableHead>Status</StyledTableHead>
                        <StyledTableHead>Actions</StyledTableHead>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <StyledTableCell>{row.name}</StyledTableCell>
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
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12} sx={{mt: 2}}>
                <div className='search-container'>
                  <Search withShadow startIcon />
                  <div className='sr-btn'>
                    <LargeButton title="see all history" />
                  </div>
                </div>
              </Grid>
            </Section>
          </Grid>
          <Grid item xs={12} md={12} lg={5} sx={{mt: 2, p: 2}}>
            <Section>
              <div className='title'>
                <h3>new transfer</h3>
              </div>
              <TransferForm creditCardData={creditCard} />
            </Section>
          </Grid>
        </Grid>
      </Page>
      </Container>
      <RightSidebar open={open} data={data} close={toggleSidePaper} /> 
    </div>
  )
}

export default DashboardApp;
