let dropdown = document.getElementById("crypto-dropdown");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Choose Crypto Currency";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

fetch("https://min-api.cryptocompare.com/data/all/coinlist")
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    return response.json();
  })
  .then(json => {
    const data = json.Data;
    // Examine the text in the response
    let option;

    Object.keys(data).forEach(key => {
      option = document.createElement("option");
      option.text = json.Data[key].Name;
      option.value = json.Data[key].Symbol;
      dropdown.add(option);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error", err);
  });


  //Talk to the price API 

  //https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP
 // `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=GBP`

  //Put the select i already have into a FormData. Then put an input for someone to type the amount for example the crypto they want converting to £. Then a submit button and add an event listener to the form. Make sure the option has been selected by doing a check. If it is, insert what the person has submitted and submite the url with fetch again.