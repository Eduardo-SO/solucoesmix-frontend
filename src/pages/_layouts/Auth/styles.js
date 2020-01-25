import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background-color: #181e2b;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    margin-top: -100px;
    width: 400px;

    color: #5e6776;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 300px;
    }

    hr {
        width: 300px;
        border-top: 1px;
        border-color: #1f2a3a;
        margin: 20px 0;
    }

    form {
        display: flex;
        flex-direction: column;

        .input-block {
            background-color: #1f2a3a;
            border-left: 1px solid white;
            border-radius: 0 4px 4px 0;

            margin-top: 10px;
            padding: 15px 0 0 15px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                font-weight: bold;
                font-size: 12px;
            }

            input {
                height: 45px;
                background-color: transparent;
                width: 350px;

                font-size: 16px;
                color: white;
            }
        }

        button {
            margin-top: 20px;
            height: 45px;

            background-color: #008239;
            color: white;

            transition: all ease 0.2s;

            &:hover {
                background-color: ${darken(0.03, '#008239')};
            }
        }
    }
`;
