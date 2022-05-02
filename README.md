# Lista de responsabilidades

## Datos:

- Api local: Crea datos, Recoge datos, envia datos y modifica datos
- Api publica: Nos envia los datos que queremos recibir

## Acciones (creación, modificación, lee, eliminar):

# Componentes

## Toast generic component

- Rederizar un elemento con texto RECIBIDO y con una clase RECIBIDA

## Toast error message component

- Renderiza un mensaje de error

## Spinner component

- Acciones: Carga

- Carga un estado y en funcion del estado RECIBIDO renderiza

## footer component

- Renderiza un texto

## Header component

- Renderiza un logo y dos list con una accion RECIBIDA cada uno

## App component

- Acciones: Cargar

- Renderiza el componente de navegacion
- Renderiza el componente de footer

## Detail component

- Acciones: Crear

- Renderiza los detalles del personaje RECIBIDO
- Renderiza dos botones(add, home)

## Home component

- Renderiza un h1
- Renderiza el filtro
- Renderiza character list
- Renderiza pager

## Favorite component

- Renderiza el filtro
- Renderiza el form
- Renderiza el listado de caracter que hallan en la Api local

## Character list component

- Acciones: crea, read, elimina

- Renderiza un listado de caracter RECIBIDO
- Renderiza el toast generic

## Character component

- Renderiza un caracter con los datos recibidos
- Renderiza el boton info
- Renderiza el boton add
- Renderiza el boton delete

## Form component

- Acciones: crea, modifica, read

- Tiene una variable de estado de create
- Renderiza un form
- Renderiza un buton con un texto recibido

## Button component

- Renderiza un boton con un texto y una accion recibida

## Character detail component

- Acciones: read

- Renderiza la informacion del personaje RECIBIDO
- Renderiza un boton con un texto y una accion RECIBIDA
- Renderiza otro boton con un texto y una accion RECIBIDA

## Pager component

- Renderiza un boton
- Renderiza un numero RECIBIDO

## Filter component

- Acciones: read

- Renderiza un listado de filtros
