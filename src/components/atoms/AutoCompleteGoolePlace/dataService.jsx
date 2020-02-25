export function getCountry(){
  var allcity =null;
  fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
  .then(res => res.json())
  .then((data) => {return data})
   
  // [
  //   {
  //     "City": "SGM",
  //     "State": "Rajasthan",
  //     "District": "Ganganagar"
  //   },
  //   {
  //     "City": "STR",
  //     "State": "Rajasthan",
  //     "District": "Ganganagar"
  //   },
  //   {
  //     "City": "A.Thirumuruganpoondi",
  //     "State": "Tamil Nadu",
  //     "District": "Coimbatore"
  //   },
  //   {
  //     "City": "A.Vellalapatti",
  //     "State": "Tamil Nadu",
  //     "District": "Madurai"
  //   },
  //   {
  //     "City": "Aadityana",
  //     "State": "Gujarat",
  //     "District": "Porbandar"
  //   },
  //   {
  //     "City": "Aambaliyasan",
  //     "State": "Gujarat",
  //     "District": "Mahesana"
  //   },
  //   {
  //     "City": "Aantaliya",
  //     "State": "Gujarat",
  //     "District": "Navsari"
  //   },
  //   {
  //     "City": "Aarambhada",
  //     "State": "Gujarat",
  //     "District": "Jamnagar"
  //   },]
  
}
export function matchCountry(state, value) {
  console.log(state);
  console.log(value);
  return (
    state.City.toLowerCase().indexOf(value.toLowerCase()) !== -1 
  );
}