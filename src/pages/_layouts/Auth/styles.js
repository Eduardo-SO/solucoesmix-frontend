import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(300deg, #364156, #011638 40%);
    background-repeat: no-repeat;
    background-size: cover;

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
        border-color: #5e6776;
        margin: 20px 0;
    }

    form {
        display: flex;
        flex-direction: column;

        .input-block {
            background-color: #1f2a3a;
            border-left: 2px solid #008239;
            border-radius: 0 4px 4px 15px;

            margin-top: 10px;
            padding: 15px 0 0 15px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            p {
                font-weight: bold;
                font-size: 12px;
            }

            span {
                margin-bottom: 10px;
                color: rgba(255, 0, 0, 1);
                font-size: 12px;
            }

            input {
                height: 45px;
                background-color: transparent;
                width: 350px;
                color: white;

                &:-webkit-autofill {
                    -webkit-text-fill-color: #fff;
                    box-shadow: 0 0 0px 1000px #1f2a3a inset;
                }

                &::placeholder {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.1);
                }
            }

            transition: 0.3s;

            &:hover {
                border-left: 2px solid orange;
            }
        }

        button {
            height: 45px;
            margin-top: 20px;
            border-radius: 4px;

            background-color: #008239;
            color: white;
            font-weight: bold;

            transition: all ease 0.2s;

            &:hover {
                background-color: ${darken(0.03, '#008239')};
            }
        }
    }
`;
