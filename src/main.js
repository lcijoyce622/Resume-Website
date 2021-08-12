import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import BootstrapIcon from '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';

const app=createApp(App);

app.component('BootstrapIcon', BootstrapIcon);

app.mount('#app');
