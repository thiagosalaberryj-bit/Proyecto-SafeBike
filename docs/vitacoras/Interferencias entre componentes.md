6. Interferencias entre componentes
Problema

Cuando el SIM800L comenzaba a transmitir datos, algunos componentes del sistema presentaban comportamientos extraños o inestables. En ciertas ocasiones los sensores devolvían valores incorrectos y en otras el ESP32 mostraba fallos temporales.

Esto ocurría debido a interferencias eléctricas y ruido generado por el alto consumo y transmisión del módulo GSM.

Como todos los componentes compartían la misma alimentación, cualquier variación provocada por el SIM800L terminaba afectando al resto del circuito.

Solución

Para reducir las interferencias, se reorganizó completamente la alimentación del sistema separando líneas de energía y distribuyendo mejor el consumo eléctrico.

También se agregaron capacitores de filtrado para estabilizar el voltaje y disminuir el ruido eléctrico generado por el módulo GSM.

Gracias a estas modificaciones, el sistema comenzó a funcionar de forma más estable y los sensores pudieron operar correctamente incluso durante la transmisión de datos móviles.