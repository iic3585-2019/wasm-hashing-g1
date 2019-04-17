# Web Assembly en C

En este repositorio se encuentra el código para compilar y ejecutar en el browser librerías en C y C++.
Entre las librerías tenemos:
* Hashing djb2
* Distancia de Levenshtein
* Algoritmo de Karatsuba

Los algoritmos como tal se encuentran en `src/cpp`.
El código que utiliza estos algoritmos se encuentra en `src/js`.
El código `wasm` se encuentra en `src/static` junto con el archivo html.

# Cómo ejecutar el proyecto

Este proyecto utiliza `Docker` y `docker-compose`.

Para poder ejecutarlo basta con simplemente hacer:

```
docker-compose build
docker-compose up
```

Una vez arriba el programa basta con dirigirse a `http://0.0.0.0:8080`. Ahí se encontrará la página con los correspondietnes inputs y botones para ejecutar los algoritmos.

En caso que se desee recompilar el código `wasm` se debe ejecutar el comando:

```
docker-compose run wasm yarn emcc
```

# Sin docker

En caso de no contar con docker se debe tener `yarn`, `node` y `emscripten` instalados.

Luego para instalar las dependencias y ejecutar la aplicaicón se debe ingresar el comando

```
yarn
yarn start
```

Finalmente si se desea recompilar el código se debe ejecutar el script

```
yarn emcc
```




