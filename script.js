let newYear = [
    {
        name: "1511794906",
        text: "Happy New Year! Out with the old, in with the new: may you be happy the whole year through"
    },


    {
        name: "Modern_Christmas_Tree_5_by_Merlin2525",
        text: "May this New Year brings you a peace filled life, warmth and togetherness in your family and much prosperity! Happy New Year!"
    },
];

let merryChristmas = [
    {
        name: "santas-sleigh",
        text: "Christmas greetings and all good wishes for your health and happiness in the coming year!"
    },
];


Array.prototype.cardsRender = function (folder) {
    const newArr = this
        .map(function (character) {
            return `
            <div class = "new_year">
					<div class = "picture"><img src="images/${folder}/${character.name}.svg" alt="${character.name}" width="300"></div>
					<div class = "text ">${character.text}</div>
                    <div class = "picture"><img src="images/${folder}/${character.name}.svg" alt="${character.name}" width="300"></div>
            </div>	
			`
        })
        .join("");

    document.write(`
		<div class = "page">
			<div>${newArr}</div>
		</div>
	`)
}

newYear.cardsRender('first');


Array.prototype.cardsSecondRender = function (folder) {
    const newArrSecond = this
        .map(function (character) {
            return `
    <div class = "christmas">
            <div><img src="images/${folder}/${character.name}.svg" alt="${character.name}" width="300"></div> 
            <div class = "text text_chr">${character.text}</div>
    </div>
    `
        })
        .join("");

    document.write(`
<div class = "page page_sec">
    <div>${newArrSecond}</div>
</div>
`)
}

merryChristmas.cardsSecondRender('second');