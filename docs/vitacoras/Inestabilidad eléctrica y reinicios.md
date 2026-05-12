1. Inestabilidad eléctrica y reinicios
Problema

Uno de los principales problemas del proyecto apareció cuando comenzamos a utilizar el módulo SIM800L junto al ESP32. Durante las pruebas, el sistema funcionaba correctamente hasta el momento en que el módulo GSM intentaba conectarse a internet o enviar datos al servidor. En ese instante, el ESP32 se reiniciaba automáticamente o algunos sensores dejaban de responder.

Después de varias pruebas y mediciones, descubrimos que el problema estaba relacionado con el consumo eléctrico del SIM800L. Este módulo necesita mucha corriente en pequeños intervalos de tiempo, especialmente durante la transmisión de datos móviles. Esos “picos de consumo” provocaban caídas de tensión en el circuito, afectando directamente al ESP32 y al resto de componentes.

Al principio pensamos que el problema estaba en el código o en errores de programación, pero luego comprobamos que se trataba de un problema de alimentación eléctrica e inestabilidad energética.

Solución

Para resolver este problema se realizaron varias modificaciones en el hardware. Primero, se agregó un capacitor electrolítico de 2200uF cerca del SIM800L. Este componente funciona como una reserva rápida de energía que ayuda a absorber los picos de consumo del módulo GSM y estabilizar el voltaje.

Además, se decidió reorganizar completamente la alimentación del sistema. Inicialmente se utilizaba un regulador LM2596 para alimentar todos los componentes al mismo tiempo, pero este no lograba responder correctamente a las demandas del SIM800L.

Por este motivo, el LM2596 fue reemplazado por dos módulos XL6009, permitiendo separar la alimentación del módulo GSM de la alimentación del ESP32 y los sensores. Gracias a esto, el sistema logró funcionar de manera mucho más estable, evitando reinicios y mejorando el rendimiento general del dispositivo.