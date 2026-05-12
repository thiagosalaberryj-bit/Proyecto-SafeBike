2. Problemas de conexión con el servidor
Problema

Durante el desarrollo del sistema, el módulo SIM800L lograba conectarse correctamente a la red móvil y enviar solicitudes, pero los datos nunca llegaban al servidor. En un principio se pensó que el problema estaba relacionado con errores de programación, la base de datos o incluso fallas en el servidor web.

Se realizaron múltiples pruebas utilizando distintas plataformas modernas de hosting y despliegue, como Render y Railway. Sin embargo, aunque el módulo parecía transmitir información, los servidores seguían rechazando las conexiones.

Después de investigar el funcionamiento interno del SIM800L, descubrimos que el módulo solo soporta conexiones HTTP tradicionales y no es compatible con HTTPS moderno, que es el protocolo seguro utilizado actualmente por la mayoría de plataformas y servidores web.

Esto provocaba que las solicitudes del SIM800L fueran rechazadas automáticamente por motivos de seguridad.

Solución

Para solucionar este inconveniente, se decidió migrar el proyecto a un servidor VPS configurado manualmente. A diferencia de las plataformas modernas utilizadas anteriormente, el VPS permitió habilitar conexiones HTTP compatibles con el módulo GSM.

Luego de configurar correctamente el servidor y adaptar la comunicación, el SIM800L logró conectarse exitosamente y enviar información al backend sin bloqueos.

Gracias a esta solución, el sistema pudo transmitir datos como ubicación GPS, movimiento y estado del dispositivo hacia la aplicación web en tiempo real.