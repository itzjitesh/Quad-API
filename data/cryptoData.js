const Crypto = require("../models/cryptoModel");
const fetch = require('node-fetch');

// Fetch data from the API and store it in the database
async function fetchAndStoreData() {
    const data = await Crypto.find();
    // console.log(data.length);
    if(data.length === 0){
        try {
            const response = await fetch('https://api.wazirx.com/api/v2/tickers');
            const data = await response.json();
            const cryptos = Object.values(data).sort((a, b) => b.base_volume - a.base_volume).slice(0, 10);

            await Promise.all(
                cryptos.map(async (crypto) => {
                    const newCrypto = new Crypto({
                        name: crypto.name,
                        last: crypto.last,
                        buy: crypto.buy,
                        sell: crypto.sell,
                        volume: crypto.volume,
                        base_unit: crypto.base_unit,
                    });
                    await newCrypto.save();
                })
            );

            console.log('Data stored successfully!');
        } catch (error) {
            console.error(error);
        }
    }else{
        console.log("Data is already saved!");
    }
}

fetchAndStoreData();