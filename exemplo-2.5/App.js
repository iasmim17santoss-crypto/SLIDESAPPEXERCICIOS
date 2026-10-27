import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Inicial</Text>

      <Button
        title="Ver Notificações"
        onPress={() => navigation.navigate('Notificacoes')}
      />
    </View>
  );
}

function TelaNotificacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>
      <Text style={styles.texto}>
        Você tem 3 novas mensagens
      </Text>
    </View>
  );
}

function TelaPerfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>
      <Text style={styles.texto}>
        Bem-vindo à tela de perfil!
      </Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TelaHome}
        options={{ title: 'Início' }}
      />

      <Stack.Screen
        name="Notificacoes"
        component={TelaNotificacoes}
        options={{ title: 'Notificações' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#777'
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            title: 'Home',
            tabBarIcon: () => <Text>🏠</Text>
          }}
        />

        <Tab.Screen
          name="PerfilTab"
          component={TelaPerfil}
          options={{
            title: 'Perfil',
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
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 18,
    textAlign: 'center'
  }
});
