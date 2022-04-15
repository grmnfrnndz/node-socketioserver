
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


// socket del cliente
const socket = io();


socket.on('connect', () => {
    // console.log('Conectado Al Servidor');

    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

// escuchar evento
socket.on('disconnect', () => {
    // console.log('Desconectado Del Servidor');
    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});


socket.on('enviar-mensaje', (payload) => {
    // console.log('Mensaje del servidor ', payload);
    
});

btnEnviar.addEventListener('click', () =>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }

    // emitir un evento
    socket.emit('enviar-mensaje', payload, (id) => {
        // console.log('Desde el server', id);
    });


});
