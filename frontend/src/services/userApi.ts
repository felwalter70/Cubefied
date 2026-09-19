import { api } from './api';

export interface Usuario {
    id: number;
    name: string;
    email: string;
}

export async function criarUsuario(dados: { name: string; email: string }): Promise<Usuario> {
    const resposta = await api.post<Usuario>('/users', dados);
    return resposta.data;
}

export async function buscarUsuario(id: string): Promise<Usuario> {
    const resposta = await api.get<Usuario>(`/users/${id}`);
    return resposta.data;
}
