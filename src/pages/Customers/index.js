import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import api from '~/services/api';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function loadCustomers() {
            const response = await api.get('/customers');

            setCustomers(response.data);
        }

        loadCustomers();
    }, [setCustomers]);

    return (
        <Container>
            <header>
                <h2>Gerenciando Clientes</h2>
                <div>
                    <button type="button">CADASTRAR</button>
                    <input type="text" placeholder="Buscar cliente" />
                </div>
            </header>

            <main>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>RESP.</th>
                            <th>CNPJ / CPF</th>
                            <th>VALOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.responsible}</td>
                                <td>{customer.cpf_cnpj}</td>
                                <td>{customer.value}</td>
                                <td className="buttons">
                                    <button type="button" className="edit">
                                        Editar
                                    </button>
                                    <button type="button" className="delete">
                                        Apagar
                                    </button>
                                </td>
                                <td>•</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </Container>
    );
}
