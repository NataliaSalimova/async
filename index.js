//  Задание 1

function myPromiseAll(promises) {
    const responses = [];
    let count = 0;

    return new Promise((resolve, reject)=> {
        promises.map((item, index)=> {
            let promise = item;

            if (!(item instanceof Promise)) {
                promise = Promise.resolve(item);
            }

            promise.then((data)=> {
                responses[index] = data;
                count ++;

                if (promises.length === count) {
                    resolve(responses);
                }
            }).then()
                .catch(e => {
                reject(e)
            })
        })
    });
}

// Задание 2

async function getPerson(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${id}`);
        const movie = await response.json();
        const characterUrl = await movie.characters[0];
        const person =  await fetch(characterUrl);
        const character = await person.json();

        renderCharacterProfile(character)
    } catch (err) {
        renderErrorMessage(err);
    }
}

getPerson(1);