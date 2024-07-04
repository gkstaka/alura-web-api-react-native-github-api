import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";
import estilos from "./estilos";
import {
    pegarRepositoriosUsuario,
    pegarRepositorioNome,
} from "../../servicos/requisicoes/repositorios";
import { useIsFocused } from "@react-navigation/native";

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [buscaNome, setBuscaNome] = useState("");
    const estaNaTela = useIsFocused();
    useEffect(() => {
        const pegaRepo = async () => {
            const resultado = await pegarRepositoriosUsuario(
                route.params.id,
                buscaNome
            );
            setRepo(resultado);
        };
        pegaRepo();
    }, [estaNaTela, buscaNome]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>
                {repo.length} repositórios criados
            </Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate("CriarRepositorio", {id:route.params.id})}>
                <Text style={estilos.textoBotao}>
                    Adicionar novo repositório
                </Text>
            </TouchableOpacity>

            <>
                <TextInput
                    value={buscaNome}
                    style={estilos.entrada}
                    placeholder="Nome do repositorio"
                    onChangeText={setBuscaNome}
                    autoCapitalize="none"
                />
            </>

            <FlatList
                style={{ width: "100%" }}
                data={repo}
                keyExtractor={(repo) => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={estilos.repositorio}
                        onPress={() => {
                            setBuscaNome("");
                            navigation.navigate("InfoRepositorio", { item });
                        }}>
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>
                            Atualizado em {item.date}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
