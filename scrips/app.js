const ingresar = {
    data: {
        titulo: 'Ingresar menú',
        
    },

    template: `
        <ingresar-menu></ingresar-menu>
    `, 
    name: "componente1",

};

const mostrar = {
    data: {
        titulo: 'Mi menú semanal',
        
    },
    
    template: `
        <ver-menu></ver-menu>
    `, 
    name:"componente2",

};

const routes = [
    { path: '/', component: mostrar },
    { path: '/mi-menu', component: mostrar },
    { path: '/ingresar-menu', component: ingresar },
    { path: '*', redirect: '/' },
];

const router = new VueRouter({routes});


const app = new Vue({
    el:'#app',
    router,
    
});