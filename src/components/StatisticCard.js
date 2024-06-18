import React from 'react'
import Box from '@mui/material/Box';
import interactions from '../icons/interactions.png'
import "./StatisticCard.css"
function StatisticCard(props) {
  return (
    <Box
        height={161}
        width={262}
        bgcolor='white'
        borderRadius='14px'
        sx={{
            boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.05)',
        }}
        className='statistic_card'
        >
            <div className='statistic_card-container'>
              <div className='statistic_card-interaction'>
                    <div className='text-card'>interactions</div>
                  <div className='number-card'>15080</div>
              </div>
              <img src={interactions} alt="" className='icon-card' />
            </div>
            <div>Depuis hier</div>
    </Box>
  )
}
/* Bg */

/*position: absolute;
left: 18.75 %;
right: 63.06 %;
top: 15.98 %;
bottom: 68.97 %;

background: #FFFFFF;
box - shadow: 6px 6px 54px rgba(0, 0, 0, 0.05);
border - radius: 14px;*/


export default StatisticCard
