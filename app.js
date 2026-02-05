const { createApp } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();
const App = {
 setup() {
  const title = "Ducks"

const collection = [
  {
   species : "Mandarin Duck",
   order : "Anseriformes:",
   region : "Asia",
   fact : "This bird is known to have an incredibly fast flight speed, covering up to 500 miles per day! They are known to symbolize fidelity in East Asian cultures, with most mating for life.",
   image : "duck images/pexels-jimmykphotos-30008853.jpg",
},

{
   species : "Mallard Duck",
   order : "Anseriformes:",
   region : " North America, Europe and Asia",
   fact :"The standard duck's quack is made by the female! Males don't quack, instead making a raspier chortle. The oldest recorded male reached 27 years old.",
   image : "duck images/pexels-jay-brand-1763356224-31560919.jpg",
},

{
  species : "Ruddy Duck",
  order : "Anseriformes:",
  region : " North America",
  fact : "Male Ruddy Ducks hold their tail upright to attract females and intimidate rival males during breeding season.",
  image : "duck images/ruddy-shelduck-8112479_1280.jpg",
},

{
  species: "Bufflehead Duck",
  order: "Anseriformes:",
  region: " Canada and Alaska",
  fact: "Bufflehead ducks primarily feed underwater, catching crustaceans and mollusks with their wide bills.",
  image: "duck images/pexels-richard-block-329101850-33872420.jpg",
},

{
  species : "Common Merganser",
  order : "Anseriformes:",
  region : " Worldwide",
  fact : "Merganser ducks have serated bills, allowing them to effectively hold larger fish and crayfish.",
  image : "duck images/seaduck-3710473_1280.jpg",
},

{
  species : "Wood Duck",
  order : "Anseriformes:",
  region : " North America",
  fact : "Thanks to conservation efforts, Wood ducks are now off the endangered list.",
  image : "duck images/pexels-ibautista-8133982.jpg",
}
]



 return {
   collection,
   title
  };
 }
}
createApp(App).use(vuetify).mount('#app');