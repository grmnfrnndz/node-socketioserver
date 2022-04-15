const socketController = (socket) => {
    // console.log('Cliente Conectado', socket.id);


    socket.on('disconnect', () => {
        // console.log('Cliente Desconectado.', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        // console.log('Enviar Mensaje: ', payload);

        const id = 13224356457869;
        callback(id);


        socket.broadcast.emit('enviar-mensaje', payload);

    });
}



module.exports = {
    socketController
}