import api from "../api";

export async function buscaUsuario(nomeUsuario) {
    try { 
        const resultado = await api.get(`/users/${nomeUsuario}`);
        return resultado.data;
    }
    catch (error) {
        console.log(error);
        return {};
    }

    
    
        // api.get("/users?login=user1")
        //     .then((response) => {
        //         // console.log(JSON.stringify(response.data, null, 2));
        //         console.log(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
}