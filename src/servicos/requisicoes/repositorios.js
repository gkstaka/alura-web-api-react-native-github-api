import api from "../api";

export async function pegarRepositoriosUsuario(id, name) {
    try {
        const resultado = await api.get(`/repos`, { params: {post_id: id, name: name} });
        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function salvarRepositoriosUsuario(postId, name, date, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: name,
            date: date,
            post_id: postId,
            id: id,
        });
        return "sucesso";
    } catch (error) {
        console.log(error);
        return "erro";
    }
}

export async function pegarRepositorioNome(postId, name) { 
    try {
        const resultado = await api.get(`/repos/post_id=${postId}`, { params: { post_id: postId, name:name } });
        return resultado.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function criarNovoRepositorio(postId, name, date) {
    try {
        await api.post(`/repos/`, {
            name: name,
            date: date,
            post_id: postId,
        });
        return "sucesso";
    } catch (error) {
        console.log(error);
        return "erro";
    }

}

export async function deletarRepositorio(id) { 
    try {
        await api.delete(`repos/${id}`);
        return "sucesso";
    }
    catch (error) { 
        console.log(error);
        return "erro";
    }
}