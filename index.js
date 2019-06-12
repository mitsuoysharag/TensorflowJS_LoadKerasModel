var model;
const path = "https://example.org/model/weights_manifest.json";

window.onload = async () => {
  await load();
  console.log('fdgf', model)
}

async function load() {
  model = await tf.loadGraphModel(path);
}