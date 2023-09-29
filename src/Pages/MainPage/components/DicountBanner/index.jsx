import { useState } from 'react';
import s from './DiscountBanner.module.css'


function DiscountBanner() {
    const [phone, setPhone] = useState('');
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const apiUrl = 'http://localhost:3333/sale/send';
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone }),
        });
        if (response.ok) {
          console.log('Coupon request sent successfully.');
        } else {
          console.error('Error sending the coupon request.');
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    };
    return(
        <div className={s.discountBanner}>
            <img className={s.dwarfImg} src="./assets/dwarf.png" alt="dwarf" />
            <div className={s.discountBannerInfo}>
                <h2 className={s.discountBannerH2}>5% off</h2>
                <h3 className={s.discountBannerH3}>on the first order</h3>
                <form className={s.discountBannerForm} onSubmit={handleFormSubmit}>
                    <input className={s.discountBannerInput} type="text" placeholder='+49' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input className={s.discountBannerBtn} type="submit" value={'Get a discount'} />
                </form>
            </div>
        </div>
    )
}
export default DiscountBanner