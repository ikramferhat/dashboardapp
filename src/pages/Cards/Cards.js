import React, { useState } from 'react'
import { Container, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Page, Section } from '../../components/Page';
import { CreditCard } from '../../components/Card';
import { SmallButton } from '../../components/Buttons/Button';
import { CreditCardDATA } from '../../DataText';
import { AddCreditCardForm } from '../../components/Form';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';

const Cards = () => {
  const [swiper, setSwiper] = useState(0);

  return (
    <div id="cards">
      <Container maxWidth="xl">
        <Page>
          <Grid item xs={12} sx={{ p: 2 }} display="flex" justifyContent="space-between" alignItems="center">
            <div className='title'>
              <h3>Cards</h3>
            </div>
            <div className='sr-btn'>
              <a href="#new-credit-card">
                <SmallButton title="add new card" />
              </a>
            </div>
          </Grid>
          <Grid container xs={12} sx={{ mt: 5 }} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'} }}>
              <Swiper onActiveIndexChange={(swiperCore) => { setSwiper(swiperCore.activeIndex); }} effect={'cards'} grabCursor={true} modules={[EffectCards]}>
                {CreditCardDATA.map((item, i) => {
                  return (
                    <SwiperSlide>
                      <CreditCard key={item.id} item={item} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </Grid>
            <Grid item xs={12} md={7} sx={{ mt: {xs: 4, md: 0}, display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'} }}>
              <div className='card-info-container'>
                <h3>card informations</h3>
                <div className='row'>
                  <p>current balance</p>
                  <p>{CreditCardDATA[swiper].currentBalance} $</p>
                </div>
                <div className='row'>
                  <p>status</p>
                  <p className='active'>active</p>
                </div>
                <div className='row'>
                  <p>type of card</p>
                  <p>{CreditCardDATA[swiper].type}</p>
                </div>
                <div className='row'>
                  <p>card holder</p>
                  <p>{CreditCardDATA[swiper].cardHolder}</p>
                </div>
                <div className='row'>
                  <p>card number</p>
                  <p>{CreditCardDATA[swiper].cardNumber}</p>
                </div>
                <div className='row'>
                  <p>expiration date</p>
                  <p>{CreditCardDATA[swiper]?.valid?.m} / {CreditCardDATA[swiper]?.valid?.y}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={6} sx={{mt: 15, p: 2}}>
              <Section id="new-credit-card">
                <div className='title'>
                  <h3>add a new credit card</h3>
                </div>
                <AddCreditCardForm  />
              </Section>
            </Grid>
          </Grid>
        </Page>
      </Container>
    </div>
  )
}

export default Cards;
