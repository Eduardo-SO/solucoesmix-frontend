import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    max-width: 1200px;
    width: 90%;

    margin: 30px auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            padding: 10px 15px;
            border-radius: 4px;

            background: #008239;
            color: #fff;

            font-weight: bold;

            transition: background 0.3s;

            &:hover {
                background: ${darken(0.03, '#008239')};
            }
        }

        input {
            height: 36px;
            padding: 0 10px;
            margin-left: 10px;
            border-radius: 4px;
        }
    }

    main {
        margin-top: 30px;
        padding: 20px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);

        table {
            border-collapse: collapse;
            width: 100%;

            th {
                text-align: left;
                font-weight: bold;
                padding-bottom: 20px;
            }

            tr {
                & + tr {
                    border-top: 1px solid rgba(255, 255, 255, 0.3);
                }

                td {
                    padding: 20px 0;
                }

                td.buttons {
                    text-align: center;

                    button {
                        background: transparent;
                    }

                    button.edit {
                        color: #27ae60;
                    }

                    button.delete {
                        margin-left: 10px;
                        color: #de3b3b;
                    }
                }
            }
        }
    }
`;
