# ¡¡Reciban una bienvenida a la línea de Backend de los #codechallenges de #WWC 2020!!

## Este es el reto #2

    *** Lee detalladamante toda la información de este README. ***

- **Nombre:** ¡LA PARTY EMPEZÓ!
- **Dificultad:** intermedia
- **Habilidades:** implementación de MongoDb, creación de modelos (**/models**), llamadas de base de datos (**/repositories**) y "separación" entre controladores (**/controllers**) y servicios (**/services**). Validaciones con strings, ejercicios con arrays y fechas (**Date()**) en JavaScript.
- **Descripción:**
  La fiesta del reto número 1, sigue. Ya la mayoría está adentro, el ambiente se está poniendo sabrosongo de a poco.
  Si te diste cuenta, el reto 1 estaba lleno de comentarios que eran pequeñas "pistas" de como implementar tu código. Así será este.
  Vamos a separar en un par de capas más nuestro backend para darle cierta "independencia" a cada parte de la app.
  Ya no usaremos un archivo (**/db.json**) para almacenar la información (base de datos), sino que nos conectaremos a un servicio de manera local: MongoDb.
  Y la lógica de negocio (_business logic_) que teníamos en el controlador, será movida a un servicio.
  Llamaremos rutas y middlewares desde (**/routes**) para que el archivo **server.js** no esté tan saturado. \***\*Importante\*\*\***: deberás instalar MongoDB en tu PC, hay muchos videos que enseñan a hacerlo según cada SO.

## Instrucciones

- Descarga este repositorio y haz `cd oop-backend` o `cd func-backend` según el tipo de backend que desees.
- Ejecuta `npm install` y luego `npm run dev` para tener tu servidor corriendo.
- Encontrarás un boilerplate con una arquitectura "MVC" (aunque sin la V :P), separada en 4 capas principales, ya mencionadas anteriorment. La idea es que trabajes en él para que se te haga más fácil completar el reto, pero puedes borrarlo y empezar desde cero. Lo importante es que cumplas las siguientes condiciones:

- Por medio de el paquete de npm **_Mongoose_** crearás la conexión a MongoDB (está casi lista) hacia una DB de nombre **_party_** y un modelo con la   estructura para guardar Asistentes (Users) más o menos con este _schema_
    ```
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  age: { type: Number, required: true },
  temperature: { type: Number, required: true },
  clothingColor: { type: String, required: true },
  isPartyng: { type: Boolean, required: true },
  role: { type: String, required: true },
    ```
- Crearás un endpoint que apuntará a `'/users'` con dos métodos: **GET** Y **POST**. (Listos)
  - El método **POST** creará (usando las funciones de los repositories) un Asistente (**User**) nuevo en un la DB.
  - Cada asistente se guardará con un `id` que será generado automáticamente por MongoDB, por esto no hay que preocuparnos por ahora.
  - **_birthay_** llegará siempre como un string de tipo **"YYYY-MM--DD"**, de ahí extraerán la edad **_age_** del Asistente.
  - La edad del Asistente debe ser mayor o igual que **18**, de lo contrario retornarás un mensaje diciendo que paila, no puede entrar y un **status 400** (no se guarda en DB).
  - Si el asistente no da su nombre o su fecha de nacimiento o su temperatura no se encuentra entre **36.5 - 37.5**, no podrá ingresar (no se guarda en la db), y retornarás un mensaje diciendo que paila, no puede entrar y un **status 400**.
  - **_clothingColor_** será el color de la prenda principal que tiene el Asistente, que puede unícamente ser **["green", "blue", "red", "black", "white"]**, pero no ahoraremos nada con esa propiedad por ahora.
  - **_isPartyng_** nos dirá si alguien está adentro (**_true_**) o afuera (**_false_**) de la fiesta.
  - **_role_** nos dirá si el integrantes es **["dj", "partycipant", "bartender"]**, pero no haremos nada con esta propiedad tampoco.
  - El método **POST** retornará el nuevo asistente creado con su respectiva información y un **status 201**.

  - El método **GET** retornará la lista de asistentes con la información de cada uno de los Asistentes que están adentro y un **status 200**. Si la lista está vacía, retornará un mensaje diciendo que no hay nadie partyseando aún y un **status 200**.
- Crea un **middleware** que se encargue de mandar un mensaje de _página no encontrada_ para cualquier endpoint que no sea `/users` y retorne un **status 404**. (Listo)
  - Los mensajes que devuelve la aplicación quedan a tu creatividad. 
  
  ***_IMPORTANTE_***
    Dentro de la carpeta **_/src/\_data_** hay un archivo de nombre **seeder.js**. Funciona independiente de la APP (pero tienes que proporcinar una URI adecuada que apunte a tu máquina local (**_localhost_**)). Con este podrás importar varios Asistentes (_partycipants_) a la DB o borrarlos todos, así:

  ```
    // Estando parado en la terminal dentro del backend que escogiste
    node src/_data/seeder.js -i // Pasas el argumento '-1' (yarg) para importar.
    node src/_data/seeder.js -d // O el argumento '-d' para borrar todos.
    // Sin comillas el argumento.
  ```

### Notas:

- Encontrarás dos carpetas:

* _oop-backend_: Trabaja aquí si prefieres un backend "orientado a objetos" que opere a través de clases.
* _func-backend_: Trabaja aquí si prefieres un backend que apunte un modo de operación funcional.
* Puedes resolver el reto en cualquiera de ambos. Sólo se revisará una. Hacer el reto en ambos no te dará más puntaje, pero sí más experiencia.
* Esto lo hacemos para que conozcas dos paradigmas diferentes de trabajo que son posibles gracias a la "flexibilidad" de JavaScript.

## ¡¡NOS VEMOS EN EL RETO NÚMERO 2 PARA QUE VER EN QUE RESULTA ESTA FIESTA!!

# ¡¡DIVIÉRTANSE!!
