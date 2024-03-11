const registro = async (nombre, tipodesangre, correo, telefono, contraseña) => {
    try {
        const response = await fetch('http://localhost:5000/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, tipodesangre, correo, telefono, contraseña }),
        });
        
        if (!response.ok) {
            throw new Error('Error en la solicitud al servidor');
        }
        
        const data = await response.json();
        console.log('Usuario registrado:', data);
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
}