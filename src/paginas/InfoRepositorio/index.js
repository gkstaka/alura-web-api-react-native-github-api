import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import estilos from "./estilos";
import { salvarRepositoriosUsuario, deletarRepositorio } from "../../servicos/requisicoes/repositorios";

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.date);

    async function salvar() {
        const resultado = await salvarRepositoriosUsuario(
            route.params.item.post_id,
            nome,
            data,
            route.params.item.id
        );
        if (resultado === "sucesso") {
            Alert.alert("Repositório salvo com sucesso");
            navigation.goBack();
        } else {
            Alert.alert("Erro", "Não foi possível salvar o repositório");
        }
    }

    async function deletar() { 
        const resultado = await deletarRepositorio(route.params.item.id);
        if (resultado === "sucesso") { 
            Alert.alert("Repositório deletado com sucesso");
            navigation.goBack();
        }
        else { 
            Alert.alert("Erro", "Não foi possível deletar o repositório");
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao} onPress={salvar}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    estilos.botao,
                    { backgroundColor: "#DD2B2B", marginTop: 10 },
                ]}
                onPress={deletar}>
                <Text style={estilos.textoBotao}>Deletar</Text>
            </TouchableOpacity>
        </View>
    );
}
