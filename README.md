

# SafeBike - Informe del Proyecto (PDISC 7° 2°)

**Integrantes:** Thiago Salaberry, Tomás Iezzi, Joaquin Acevedo  
**Docente:** Maria Paula Balda y York Elias Mansilla Muños  
**Materia:** Proyecto, Diseño e Implementación de Sistemas Computacionales  
**Fecha:** 07/04/2026

---


## Índice

1. [Introducción](#introducción)
2. [Planteamiento del problema](#planteamiento-del-problema)
3. [Objetivos del proyecto](#objetivos-del-proyecto)
	- [Objetivo general](#objetivo-general)
	- [Objetivos específicos](#objetivos-específicos)
4. [Descripción general del sistema](#descripción-general-del-sistema)
5. [Arquitectura del sistema](#arquitectura-del-sistema)
	- [Componente electrónico](#componente-electrónico)
	- [Backend (servidor y API)](#backend-servidor-y-api)
	- [Base de datos](#base-de-datos)
	- [Aplicación (frontend)](#aplicación-frontend)
6. [Funcionalidades del sistema](#funcionalidades-del-sistema)
	- [Funcionalidades principales (MVP)](#funcionalidades-principales-mvp)
	- [Funcionalidades de expansión](#funcionalidades-de-expansión)
7. [Integración de inteligencia y automatización](#integración-de-inteligencia-y-automatización)
	- [Detección inteligente de robos](#detección-inteligente-de-robos)
	- [Sistema de alertas automatizadas](#sistema-de-alertas-automatizadas)
	- [Análisis de zonas de riesgo](#análisis-de-zonas-de-riesgo)
8. [Metodología de desarrollo](#metodología-de-desarrollo)
9. [FODA](#foda)
	- [Fortalezas](#fortalezas)
	- [Oportunidades](#oportunidades)
	- [Debilidades](#debilidades)
	- [Amenazas](#amenazas)
10. [Comparación técnica con candados con alarma](#comparación-técnica-con-candados-con-alarma)
11. [Comparación con seguros de bicicletas](#comparación-con-seguros-de-bicicletas)
12. [Viabilidad del proyecto](#viabilidad-del-proyecto)
	- [Viabilidad técnica](#viabilidad-técnica)
	- [Viabilidad económica](#viabilidad-económica)
	- [Viabilidad social](#viabilidad-social)
	- [Posibilidades de escalabilidad](#posibilidades-de-escalabilidad)
13. [Conclusión](#conclusión)

---


## Introducción

En los últimos años, el uso de la bicicleta ha aumentado considerablemente como medio de transporte urbano y actividad recreativa. Este crecimiento se debe a factores como la búsqueda de alternativas económicas, ecológicas y saludables. Sin embargo, este incremento también ha traído consigo una problemática significativa: el aumento de robos de bicicletas y la falta de soluciones tecnológicas accesibles para prevenirlos o actuar de manera efectiva ante estos incidentes.


En este contexto, resulta necesario desarrollar herramientas que integren distintas áreas tecnológicas con el fin de brindar soluciones innovadoras. SafeBike propone la creación de un sistema que combine programación, electrónica e inteligencia aplicada para mejorar la seguridad de los ciclistas y ampliar las funcionalidades asociadas al uso de la bicicleta.

## Planteamiento del problema

En zonas urbanas como el conurbano bonaerense, el robo de bicicletas es un problema frecuente que afecta tanto a estudiantes como a trabajadores que utilizan este medio de transporte diariamente.

Los sistemas de seguridad tradicionales presentan limitaciones claras:
- No permiten rastrear la bicicleta una vez robada.
- No generan alertas en tiempo real.
- No brindan información sobre el evento ocurrido.

Por otro lado, las aplicaciones existentes se enfocan en el seguimiento de actividad física, pero no integran funciones de seguridad.

Esto genera una necesidad concreta: un sistema que combine seguridad, monitoreo y conectividad en una sola solución.

## Objetivos del proyecto

### Objetivo general

Desarrollar un sistema inteligente de seguridad y monitoreo para bicicletas que integre dispositivos electrónicos, una aplicación y un servidor, permitiendo detectar eventos, enviar alertas y gestionar información en tiempo real.

### Objetivos específicos

- Diseñar un dispositivo electrónico capaz de detectar movimiento.
- Implementar un sistema de comunicación entre el dispositivo y un servidor.
- Desarrollar una API para la gestión de datos.
- Crear una aplicación para la interacción con el usuario.
- Integrar funciones de análisis y automatización.
- Garantizar la escalabilidad del sistema.

## Descripción general del sistema

El sistema consiste en una solución tecnológica compuesta por tres elementos principales: un dispositivo físico instalado en la bicicleta, un servidor que procesa la información y una aplicación que permite la interacción con el usuario.

El dispositivo recolecta datos del entorno, los envía al servidor, donde son procesados y almacenados. Luego, la aplicación permite visualizar la información y recibir notificaciones.

El sistema está diseñado como una plataforma escalable, permitiendo la incorporación de nuevas funcionalidades sin modificar su estructura base.

## Arquitectura del sistema

### Componente electrónico

El dispositivo se basa en un microcontrolador y cuenta con sensores que permiten detectar movimiento y ubicación. Sus funciones principales son:
- Detectar cambios en el estado de la bicicleta.
- Enviar información al servidor.
- Activar alertas locales.

### Backend (servidor y API)

El backend es responsable de:
- Procesar los datos recibidos.
- Gestionar la lógica del sistema.
- Exponer una API para la comunicación.
- Enviar notificaciones.

### Base de datos

Permite almacenar:
- usuarios
- bicicletas
- eventos
- ubicaciones

Facilitando tanto el funcionamiento del sistema como el análisis posterior.

### Aplicación (frontend)

La aplicación permite:
- visualizar información
- recibir alertas
- interactuar con el sistema

Actúa como interfaz principal entre el usuario y la plataforma.

## Funcionalidades del sistema

### Funcionalidades principales (MVP)

El sistema mínimo viable incluye:
- registro de usuarios
- vinculación de bicicleta
- detección de movimiento
- envío de alertas
- visualización de ubicación

Estas funciones permiten que el sistema sea completamente operativo.

### Funcionalidades de expansión

El sistema puede ampliarse con:
- seguimiento de actividad (kilómetros, calorías)
- mapa de robos
- funciones sociales
- mejoras en seguridad

Estas características agregan valor sin afectar la estructura principal.

## Integración de inteligencia y automatización

El sistema propuesto no se limita únicamente a registrar eventos, sino que incorpora mecanismos de análisis que permiten interpretar la información recolectada y tomar decisiones automatizadas. De esta manera, se transforma en un sistema inteligente capaz de adaptarse al comportamiento del usuario y mejorar su funcionamiento con el tiempo.

La incorporación de lógica basada en patrones y análisis de datos permite optimizar la seguridad, reducir falsas alertas y generar información relevante para la toma de decisiones.

El plan es implementar alguna de las tres siguientes opciones que sean más viables implementar con automatización de IA y no con código.

### Detección inteligente de robos

El sistema analiza los patrones de uso habituales de la bicicleta, considerando variables como horarios de utilización, frecuencia de uso y ubicaciones comunes. A partir de estos datos, es capaz de identificar comportamientos anómalos que se desvían de la rutina del usuario. Por ejemplo, un movimiento detectado en un horario inusual o en una ubicación no frecuente puede ser interpretado como una situación sospechosa.

Este enfoque permite diferenciar entre un uso legítimo y un posible intento de robo, mejorando la precisión del sistema y disminuyendo la generación de falsas alarmas.

### Sistema de alertas automatizadas

El sistema incorpora un mecanismo de clasificación de eventos basado en distintos niveles de riesgo. En lugar de generar una única alerta genérica, se establece una jerarquización que permite adaptar la respuesta según la gravedad de la situación detectada.

De esta forma, los eventos pueden categorizarse en niveles como bajo, medio o alto riesgo, lo que se traduce en distintos tipos de notificaciones para el usuario.

Este modelo mejora la experiencia de uso, evitando saturación de alertas innecesarias y garantizando una respuesta más efectiva ante situaciones críticas.

### Análisis de zonas de riesgo

A partir de los datos recolectados por el sistema, tanto individuales como comunitarios, se realiza un análisis espacial que permite identificar áreas con mayor incidencia de robos.

Este procesamiento de información posibilita la generación de mapas de riesgo, en los cuales se destacan zonas potencialmente peligrosas para los usuarios.

Como resultado, el sistema no solo actúa de manera reactiva ante eventos, sino que también aporta una dimensión preventiva, brindando información útil para la toma de decisiones y la planificación de recorridos más seguros.

## Metodología de desarrollo

El desarrollo del proyecto se plantea bajo un enfoque iterativo e incremental, inspirado en metodologías ágiles como Scrum. Este enfoque permite dividir el proceso en etapas o ciclos de trabajo denominados sprints, en los cuales se desarrollan y validan distintas partes del sistema.

Esta metodología favorece una evolución progresiva del proyecto, comenzando por un producto mínimo viable (MVP) y agregando funcionalidades de manera gradual.

Entre sus principales ventajas se destacan:
- la posibilidad de detectar y corregir errores en etapas tempranas
- la adaptación a cambios durante el desarrollo
- la mejora continua del sistema a partir de pruebas y retroalimentación

Este enfoque resulta adecuado para nuestro proyecto, donde la complejidad requiere validaciones constantes.

## FODA

El análisis FODA permite evaluar el proyecto desde una perspectiva estratégica, identificando factores internos y externos que pueden influir en su desarrollo.

### Fortalezas

El proyecto presenta una fuerte integración entre electrónica y software, lo que le otorga un carácter innovador. Además, se basa en tecnologías accesibles y de bajo costo, lo que facilita su implementación. Su enfoque modular también permite una fácil ampliación de funcionalidades.

### Oportunidades

Existe una problemática real y vigente relacionada con la seguridad de bicicletas, lo que genera una oportunidad concreta de aplicación. Asimismo, el crecimiento del uso de bicicletas en entornos urbanos incrementa la relevancia del sistema. Además, muchos otros productos ofrecen características similares pero fragmentadas, nosotros ofrecemos un sistema completo que implemente todo en un solo producto.

### Debilidades

El sistema depende de la conectividad a internet para su funcionamiento completo, lo que puede limitar su desempeño en ciertos contextos. Además, el desarrollo inicial puede presentar una complejidad técnica considerable, especialmente en la integración de los distintos componentes.

A esto se suma una limitación vinculada a la financiación del proyecto. Si bien los componentes individuales pueden ser de bajo costo, la implementación completa del sistema implica una inversión inicial asociada a la adquisición de hardware, pruebas, posibles iteraciones de prototipado y despliegue de infraestructura (como servidores o servicios en la nube). Esta dependencia de recursos económicos puede condicionar el ritmo de desarrollo, la calidad de los materiales utilizados y la escalabilidad en etapas tempranas, especialmente en contextos donde no se cuenta con financiamiento externo o apoyo institucional.

### Amenazas

Entre los factores externos, se destacan la posible existencia de soluciones competidoras y las limitaciones propias del hardware utilizado, como precisión de sensores o autonomía de batería. También pueden surgir dificultades en entornos reales que afecten el rendimiento del sistema.

## Comparación técnica con candados con alarma

En el mercado actual existen soluciones intermedias entre los candados tradicionales y los sistemas inteligentes, como los candados con alarma integrada. Estos dispositivos incorporan sensores de vibración o movimiento que, ante una manipulación no autorizada, activan una señal sonora de alta intensidad con el objetivo de disuadir al potencial ladrón. Desde el punto de vista técnico, estos sistemas representan una evolución respecto a los candados mecánicos, ya que introducen un componente electrónico básico orientado a la detección de eventos.

Sin embargo, los candados con alarma continúan siendo sistemas cerrados y locales. Su arquitectura no contempla conectividad ni comunicación con otros componentes externos, lo que implica que toda su lógica de funcionamiento se ejecuta de manera aislada dentro del dispositivo. En consecuencia, si bien pueden detectar un evento (por ejemplo, un intento de robo) y reaccionar mediante una alarma sonora, no generan registros persistentes, no transmiten información ni permiten interacción remota con el usuario.

En este sentido, su capacidad de respuesta está limitada al entorno inmediato. La efectividad de la alarma depende de factores externos como la presencia de personas cercanas, el nivel de ruido ambiental o incluso la disposición del ladrón a ignorarla. Además, estos dispositivos no permiten al usuario recibir notificaciones en tiempo real si no se encuentra cerca, ni ofrecen herramientas para actuar una vez que el robo se ha concretado.

En contraste, el sistema propuesto en este proyecto puede ser clasificado como un sistema distribuido con capacidades de sensado, comunicación y procesamiento. A diferencia del candado con alarma, no solo detecta eventos mediante sensores de movimiento, sino que además transmite esta información a un servidor a través de internet. Esto habilita la generación de alertas remotas, permitiendo al usuario recibir notificaciones en tiempo real independientemente de su ubicación.

Adicionalmente, el sistema incorpora almacenamiento de datos y procesamiento en backend, lo que posibilita el análisis histórico de eventos y la aplicación de lógica inteligente. Esto incluye la detección de patrones de uso, la clasificación de eventos según niveles de riesgo y la identificación de comportamientos anómalos. De esta forma, el sistema no solo reacciona ante un estímulo, sino que interpreta el contexto en el que ocurre.

Otro aspecto diferencial es la integración funcional. Mientras que el candado con alarma cumple una única función específica (emitir sonido ante movimiento), el sistema propuesto unifica múltiples funcionalidades en una sola plataforma: monitoreo, alertas, geolocalización (opcional), análisis de datos y visualización mediante una aplicación. Esta integración amplía significativamente el alcance del sistema, transformándolo de un dispositivo reactivo a una solución preventiva y analítica.

En términos técnicos, puede afirmarse que el candado con alarma representa un sistema embebido autónomo sin conectividad, mientras que el sistema desarrollado en este proyecto corresponde a una arquitectura ciberfísica distribuida, con comunicación bidireccional y capacidades de procesamiento escalables.

#### Tabla comparativa: Candado con alarma vs. Sistema propuesto

| Criterio                | Candado con alarma         | Sistema propuesto                       |
|-------------------------|---------------------------|-----------------------------------------|
| Tipo de sistema         | Sistema local embebido     | Sistema ciberfísico distribuido         |
| Detección de eventos    | Sí (vibración/movimiento)  | Sí (sensores + lógica inteligente)      |
| Tipo de respuesta       | Alarma sonora local        | Alertas remotas + notificaciones        |
| Conectividad            | No posee                   | Sí (internet / servidor)                |
| Monitoreo remoto        | No                        | Sí                                      |
| Registro de datos       | No                        | Sí (base de datos)                      |
| Análisis de eventos     | No                        | Sí (patrones y riesgo)                  |
| Dependencia del entorno | Alta (ruido, personas)     | Baja                                    |
| Complejidad técnica     | Baja                      | Alta                                    |
| Costo                   | Bajo                      | Medio                                   |
| Instalación             | Simple                    | Moderada                                |
| Consumo energético      | Bajo                      | Optimizado pero mayor                   |
| Escalabilidad           | Nula                      | Alta                                    |
| Capacidad post-robo     | Nula                      | Posible seguimiento y análisis          |

## Comparación con seguros de bicicletas

En el mercado actual, otra alternativa para afrontar el problema del robo de bicicletas es la contratación de seguros específicos. Estos servicios permiten al usuario obtener una compensación económica en caso de robo o daño, trasladando el riesgo a una entidad aseguradora.

Desde un punto de vista técnico y funcional, los seguros representan una solución de carácter reactivo. Es decir, su intervención ocurre una vez que el evento ya se ha producido. No cuentan con mecanismos de detección en tiempo real ni herramientas que permitan prevenir o mitigar el robo en el momento en que sucede, y su alcance se limita principalmente a una compensación económica que puede ser o no equivalente al valor real de la bicicleta.

Esto no implica que los seguros sean una solución ineficaz, sino que responden a una lógica diferente. Mientras que el sistema propuesto se enfoca en la prevención, detección y respuesta en tiempo real, los seguros actúan como un respaldo posterior al evento. En este sentido, ambas alternativas pueden considerarse complementarias, ya que abordan el problema desde enfoques distintos.

#### Tabla comparativa: Seguro de bicicleta vs. Sistema propuesto

| Criterio                | Seguro de bicicleta        | Sistema propuesto                       |
|-------------------------|---------------------------|-----------------------------------------|
| Tipo de solución        | Servicio financiero        | Sistema tecnológico                     |
| Enfoque                 | Reactivo                   | Preventivo y activo                     |
| Detección en tiempo real| No                        | Sí                                      |
| Notificaciones          | No                        | Sí                                      |
| Recuperación del bien   | No                        | Posible                                 |
| Compensación económica  | Sí                        | No                                      |
| Dependencia del usuario | Alta (trámites)           | Media                                   |
| Costo                   | Periódico                 | Inicial                                 |

## Viabilidad del proyecto

El proyecto presenta condiciones favorables para su desarrollo desde distintos puntos de vista.

### Viabilidad técnica

Las tecnologías necesarias para su implementación son ampliamente conocidas y cuentan con abundante documentación, lo que facilita su aprendizaje y aplicación. Además, el sistema puede desarrollarse de manera progresiva, reduciendo la complejidad inicial.

### Viabilidad económica

Los componentes electrónicos requeridos tienen un costo relativamente bajo, y el desarrollo de software puede realizarse utilizando herramientas gratuitas o de código abierto, lo que reduce significativamente la inversión necesaria.

### Viabilidad social

El proyecto responde a una necesidad concreta relacionada con la seguridad, lo que le otorga relevancia en el contexto actual. Su implementación podría generar un impacto positivo en la comunidad, mejorando la protección de los usuarios y promoviendo el uso de la bicicleta.

### Posibilidades de escalabilidad

El sistema ha sido concebido con una arquitectura modular que permite la incorporación de nuevas funcionalidades sin necesidad de modificar su estructura principal. Esto posibilita su evolución hacia versiones más completas, integrando nuevas características como análisis avanzados, funciones sociales o mejoras en la interacción con el usuario.

La escalabilidad del sistema asegura su adaptación a futuras necesidades y su crecimiento en complejidad y alcance.


## Conclusión


SafeBike propone una solución integral que combina electrónica, programación y análisis de datos para abordar una problemática actual vinculada a la seguridad de las bicicletas.

Su enfoque no solo permite responder a situaciones de riesgo, sino también anticiparse mediante el uso de lógica inteligente y procesamiento de información.

Además, su diseño escalable y su viabilidad técnica y económica lo convierten en una propuesta sólida, con potencial de crecimiento y aplicación en contextos reales.



