"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuItem, Select, Typography } from '@mui/material';

interface Coins {
  id: string;
  name: string;
  symbol: string;
}

const Dropdown = () => {
  const [coins, setCoins] = useState<Coins[]>([]);
  const [selectedCoin, setSelectedCoin] = useState("");

  const MAX_COIN_NAME_LENGTH = 10;

  const shortenString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength - 3) + '...';
};

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list', {
          params: {
            per_page: 10, 
          },
        });
        console.log(response.data)
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCoins();
  }, []);

  const handleChange = (event: any) => {
    setSelectedCoin(event.target.value);
  };

  const reducedData = coins.slice(0, 120)

      console.log(selectedCoin)
  return (
    <div className='flex w-full h-full items-center gap-4 text-white'>
      <span className="hovertext"   data-hover={selectedCoin} >
      <Typography fontFamily="inherit" sx={{paddingLeft: "4px"}} className=" uppercase">{shortenString(selectedCoin, MAX_COIN_NAME_LENGTH)}</Typography>
      </span>
      <Select 
        labelId="demo-customized-select-label"
        id="demo-customized-select" sx={{
        color: "white",
        backgroundColor: "transparent",
        outline: "none",
        fontFamily: "inherit" ,
        height: "100%",
        textTransform: "uppercase",
        // overflow: "scroll",
        '& .MuiSvgIcon-root': {
          color: "white",
        },
        '& .MuiMenuItem-root .MuiMenu-paper': {
          backgroundColor: "transparent",
          // "& .MuiMenu-paper": {
          // }
        },
      }} value={selectedCoin} onChange={handleChange}>
        <MenuItem value="">Select a coin</MenuItem>
        {reducedData.map((coin) => (
          <MenuItem sx={{fontFamily: "inherit"}} key={coin.id} value={coin.name} disableGutters>
            {coin.symbol}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;