import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const produtos = [
  { id: '1', nome: 'Notebook', preco: 2500 },
  { id: '2', nome: 'Mouse', preco: 80 },
  { id: '3', nome: 'Teclado', preco: 150 },
  { id: '4', nome: 'Monitor', preco: 900 }
];

function TelaProdutos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.produto}
            onPress={() => navigation.navigate('Detalhes', {
              nome: item.nome,
              preco: item.preco
            })}
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function TelaDetalhes({ route, navigation }) {
  const { nome, preco } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Produto</Text>

      <Text style={styles.texto}>Produto: {nome}</Text>
      <Text style={styles.texto}>
        Preço: R$ {preco.toFixed(2)}
      </Text>

      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Produtos"
          component={TelaProdutos}
          options={{ title: 'Produtos' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{ title: 'Detalhes do Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  produto: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  texto: {
    fontSize: 18,
    marginBottom: 15
  }
});
