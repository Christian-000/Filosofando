### API CON CITAS FILOSOFICAS FAMOSAS :fa-university:

###Endpoints



####GET


    - https://filosofando-api.herokuapp.com/api/get/all
Para obtener todas las citas en un array.

	https://filosofando-api.herokuapp.com/api/get/:author
Ejemplo:

	https://filosofando-api.herokuapp.com/api/get/Descartes
Devuelve un array con algunas de sus citas más famosas en el siguiente formato.
`{
	quote: "cita",
	author: "nombre_del_autor"
}`


###Private Endpoints
Para acceder a estos endpoints necesitas  el permiso del administrador (yo).

####POST
	https://filosofando-api.herokuapp.com/api/add
Añade una nueva cita.
Deberás pasarle por body un json con el siguiente formato  `{
	quote: "cita",
	author: "nombre_del_autor"
}`

####DELETE
	https://filosofando-api.herokuapp.com/api/del/:id
Elimina una cita de la base de datos.

Ejemplo:

	https://filosofando-api.herokuapp.com/api/del/6230a3411e7eb6720a2b1x4t
