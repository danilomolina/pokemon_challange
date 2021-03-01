import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios'

import { Container } from '../styles/pages/List'
import {  
    DataGrid,
    ColDef,
    ValueGetterParams,
    CellParams,
    GridApi 
} from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export function useFetch<Data = any, Error = any>(url: string) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
        const response = await api.get(url);

        var i = 0;
        response.data.results.map(
            (obj) => {
                obj['id'] = i;
                i++
                return obj;
            });

        return response.data.results;
    })

    return { data, error }
}

const List: React.FC = () => {

    const { data } = useFetch("pokemon?offset=5&limit=1118");

    if (!data) {
        return <p>Carregando...</p>;
    }

    const columns: ColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'url', headerName: 'Url', width: 600 }  
    ]

    return (
        <Container>
            <Head>
                <title>List</title>
            </Head>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={data} columns={columns} pageSize={6} />
            </div>

            <div id='link'>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </div>
        </Container>
    )
}

export default List