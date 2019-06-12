var path = "https://tensorflowjs-prueba.herokuapp.com/model/model.json";
var model

console.log('Inicio')
load()

async function load() {
  model = await tf.loadLayersModel(path)
  console.log('Modelo: ', model)
  input = tf.tensor([Array.apply(null, { length: 65 }).map(Number.call, Number)])
  model.predict(input).print()
}