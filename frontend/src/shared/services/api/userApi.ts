import { api } from './api';

export interface User {
    id: number;
    name: string;
    email: string;
}

class UserApi {
    async create(data: { name: string; email: string }): Promise<User> {
        const resposta = await api.post<User>('/users', data);
        return resposta.data;
    }

    async getAll(): Promise<User[]> {
        const resposta = await api.get<User[]>(`/users`);
        return resposta.data;
    }

    async getById(id: string): Promise<User> {
        const resposta = await api.get<User>(`/users/${id}`);
        return resposta.data;
    }

    async deleteById(id: string) {
        await api.delete(`/users/${id}`);
    }
}

export default new UserApi();
