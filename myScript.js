async function getData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    // console.log(data);

    data.forEach((country) => {
        var show = document.getElementById("show");
        show.innerHTML += `
        <tr>
            <td class>${country.name.common}</td>
            <td>${country.capital ? country.capital[0] : 'N/A'}</td>
            <td>${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
            <td><img src="${country.flags.png}" width="100px" height="50px"></td>
        </tr>`
    })
}
getData();