import React from 'react';
import styled from '@emotion/styled';
    const  Footer = () => {

    const FooterBlock = styled.div`
        padding: 3rem 0;
        text-align: center;
        font-size: 12px;
    `;

    return (
        <FooterBlock>
        ©<span >Gyumong</span>, Built with{' '}
        <span>
          Gatsby
        </span>
      </FooterBlock>
    )
};

export default Footer