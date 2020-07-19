import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

//Registra o componente principal da aplicação
AppRegistry.registerComponent(appName, () => App);