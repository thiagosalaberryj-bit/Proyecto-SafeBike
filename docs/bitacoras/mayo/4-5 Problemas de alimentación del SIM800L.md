4. Problemas de alimentación del SIM800L
Problema

Durante las pruebas generales del sistema, observamos que el SIM800L requería más energía de la esperada. Aunque el circuito parecía funcionar correctamente en reposo, al momento de transmitir datos móviles el consumo aumentaba considerablemente.

En algunos casos el módulo dejaba de responder, perdía conexión o generaba inestabilidad en el resto del sistema. Esto sucedía porque el SIM800L puede demandar corrientes elevadas durante cortos períodos de tiempo, algo que muchas fuentes de alimentación pequeñas no pueden soportar correctamente.

Solución

Para garantizar un funcionamiento estable, se utilizaron baterías 18650 de mayor capacidad junto con módulos elevadores XL6009 capaces de suministrar la corriente necesaria para el SIM800L.

También se reorganizó la distribución de energía del circuito para asegurar que el módulo GSM tuviera una alimentación independiente y estable durante las transmisiones.

Gracias a estas modificaciones, el sistema logró mantener una comunicación mucho más confiable y reducir los fallos relacionados con la alimentación.