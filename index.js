var path = "https://tensorflowjs-prueba.herokuapp.com/model/model.json";
var model

console.log('Inicio')
load()

async function load() {
  model = await tf.loadLayersModel(path)
  console.log('Modelo: ', model)

  input = [Array(65).fill(0).map((n, i) => i != 0 ? 0 : 1)]
  console.log(input)

  predict = model.predict(tf.tensor(input))
  predict.array().then(array => {
    word = array[0][array.length - 1]
    console.log(word)
    idx = word.indexOf(Math.max(...word));
    console.log(idx)
  });
}