import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 900px;
    margin: 40px auto;

    header {
        display: flex;
        justify-content: center;
    }

    hr {
        border-top: 1px;
        border-color: #5e6776;
        margin: 20px 0;
    }

    form {
        display: flex;
        flex-direction: column;

        .input-block {
            display: flex;
            flex-direction: column;

            margin-top: 15px;

            p {
                margin-bottom: 10px;
                font-weight: bold;
                font-size: 12px;
            }

            span {
                margin-bottom: 10px;
                color: rgba(255, 0, 0, 1);
                font-size: 12px;
            }

            input {
                width: 100%;
                height: 45px;
                padding: 0 10px;

                border: 1.5px solid rgba(255, 255, 255, 0.3);
                border-radius: 4px;

                background-color: transparent;
                color: white;

                &::placeholder {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.2);
                }

                &:-webkit-autofill {
                    -webkit-text-fill-color: #fff;
                    box-shadow: 0 0 0px 1000px #1f2a3a inset;
                }
            }

            textarea {
                max-width: 100%;
                padding: 10px 10px;

                border: 1.5px solid rgba(255, 255, 255, 0.3);
                border-radius: 4px;

                background-color: transparent;
                color: white;

                &::placeholder {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.2);
                }
            }
        }

        button {
            height: 45px;
            margin-top: 40px;
            border-radius: 4px;
            font-size: 18px;

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
