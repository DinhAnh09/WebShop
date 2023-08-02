import React from 'react';
import "./Footer.scss";
const Footer = () => {
    return (
        <div className='footer'>
          <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Nữ</span>
                <span>Nam</span>
                <span>Giày</span>
                <span>Phụ Kiện</span>
                <span>Quần Áo</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Trang Chủ</span>
                <span>Cửa Hàng</span>
                <span>So Sánh</span>
                <span>Giảm Giá</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>
                Chúng tôi là thương hiệu Việt, Chúng tôi luôn muốn phát triển ngành thời trang Viêt, thật vinh hạnh khi được đồng hành cùng quý khách. Hy vọng có thể mang đến cho quý khách sản phẩm có chất lượng tốt nhất, dịch vụ chất  lượng nhất                   
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>
                   Mọi thông tin, thắc mắc hãy liên lạc với chúng tôi qua các kênh truyền thông của GuCci. facebook, IG, email, twiter.Mọi đóng góp của bạn chúng tôi đều trân trọng, Rất vui khi được đồng hành cùng bạn .

            </span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
                <span className="logo">GucciStore</span>
                <span className="copyright">
                    © Copyright 2023. All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>                                              
          </div> 

        </div>
    );
};

export default Footer;