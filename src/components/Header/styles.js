import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    background: linear-gradient(90deg, #011638, #00235b);

    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        height: 70%;
        img {
            height: 100%;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 3px;
    }

    span {
        color: #de3b3b;
    }
`;
