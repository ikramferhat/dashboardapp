import React, { useState } from 'react'
import { Container, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Page } from '../../components/Page';
import { CreditCard } from '../../components/Card';
import { SmallButton } from '../../components/Buttons/Button';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';

const creditCard = [
    {
      id: 1,
      type: 'card-type',
      cardNumber: '2526417036958956',
      cardHolder: 'username',
      valid: {m: 10, y: 24},
      currentBalance: '200'
    },
    {
      id: 2,
      type: 'card-type',
      cardNumber: '2222417036954074',
      cardHolder: 'username',
      valid: {m: 9, y: 25},
      currentBalance: '2000'
    },
    {
      id: 3,
      type: 'card-type',
      cardNumber: '111141702885142',
      cardHolder: 'username',
      valid: {m: 10, y: 23},
      currentBalance: '100'
    }
];

const Cards = () => {
  const [swiper, setSwiper] = useState(0);

  return (
    <div id="cards">
      <Container maxWidth="xl">
        <Page>
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <div className='title'>
              <h3>Cards</h3>
            </div>
            <div className='sr-btn'>
              <SmallButton title="add new card" />
            </div>
          </Grid>
          <Grid container xs={12} sx={{ mt: 5 }}>
            <Grid item xs={12} md={6}>
              <Swiper onActiveIndexChange={(swiperCore) => { setSwiper(swiperCore.activeIndex); }} effect={'cards'} grabCursor={true} modules={[EffectCards]}>
                {creditCard.map((item, i) => {
                  return (
                    <SwiperSlide>
                      <CreditCard
                        key={item.id}
                        type={item.type}
                        cardHolder={item.cardHolder}
                        cardNumber={item.cardNumber}
                        valid={item.valid}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: {xs: 4, md: 0} }}>
              <div className='card-info-container'>
                <div className='divider' />
                <h3>card informations</h3>
                <div className='row'>
                  <p>current balance</p>
                  <p>{creditCard[swiper].currentBalance} $</p>
                </div>
                <div className='row'>
                  <p>status</p>
                  <p className='active'>active</p>
                </div>
                <div className='row'>
                  <p>type of card</p>
                  <p>{creditCard[swiper].type}</p>
                </div>
                <div className='row'>
                  <p>card holder</p>
                  <p>{creditCard[swiper].cardHolder}</p>
                </div>
                <div className='row'>
                  <p>card number</p>
                  <p>{creditCard[swiper].cardNumber}</p>
                </div>
                <div className='row'>
                  <p>expiration date</p>
                  <p>{creditCard[swiper]?.valid?.m} / {creditCard[swiper]?.valid?.y}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Page>
      </Container>
    </div>
  )
}

export default Cards;
