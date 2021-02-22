var axios = require('axios');
var express = require('express');
var router = express.Router();

router.get('/:var1', async function(req, res) {
  const filmsUrlArr = await axios.get(`https://swapi.dev/api/people/${req.params.var1}`);
  const filmsPromisesArr = filmsUrlArr.data.films.map( (element) => {
    return axios.get(`${element}`);
  });    
  const filmsObjectsArr = await Promise.all(filmsPromisesArr);
  const filmTitlesArr = filmsObjectsArr.map(element => element.data.title);

  // const speciesPromisesArr = filmsObjectsArr.map( (element) => {
  //   element.data.species.map( (element)  => {
  //     // console.log(axios.get(`${element}`), element);
  //     return axios.get(`${element}`);
  //   });
  // })

  // const speciesObjectsArr = await Promise.all(speciesPromisesArr);
  // console.log(speciesObjectsArr);

  // const speciesNamesArr = speciesObjectsArr.map(element => element.data.name);
  // console.log("names: " + speciesNamesArr);

  res.render('character', {name: filmsUrlArr.data.name, films: filmTitlesArr});
});

module.exports = router;
