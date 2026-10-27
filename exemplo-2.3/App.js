import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.texto}>Bem-vindo à página inicial!</Text>
    </View>
  );
}

function TelaBusca() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Busca</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua busca"
      />
    </View>
  );
}

function TelaPerfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={styles.texto}>Esta é a tela do seu perfil.</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#777',
          tabBarStyle: {
            backgroundColor: '#fff'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={TelaHome}
          options={{
            tabBarIcon: () => <Text>🏠</Text>
          }}
        />

        <Tab.Screen
          name="Busca"
          component={TelaBusca}
          options={{
            tabBarIcon: () => <Text>🔍</Text>
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{
            tabBarIcon: () => <Text>👤</Text>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8
  }
});
