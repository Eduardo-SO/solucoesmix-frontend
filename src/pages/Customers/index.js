import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    useEffect(() => {}, []);

    async function handleDelete(id) {
        try {
            toast.success('Cliente deletado com sucesso');

            await api.delete(`customers/${id}`);

            const response = await api.get('/customers');

            setCustomers(response.data);
        } catch (error) {
            toast.error('Falha ao deletar o cliente');
        }
    }

    return (
        <Container>
            <header>
                <h2>Gerenciando Clientes</h2>
                <div>
                    <Link to="/customer">CADASTRAR</Link>
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
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.responsible}</td>
                                <td>{customer.cpf_cnpj}</td>
                                <td>{customer.value}</td>
                                <td className="buttons">
                                    <button type="button" className="edit">
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="delete"
                                        onClick={() =>
                                            handleDelete(customer.id)
                                        }
                                    >
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
