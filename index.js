//  Задание 1.

// 1. Переменную count добавляла для того, чтобы вызывать resolve после того, как все промисы будут выполнены.
// 2. А переменную promise, чтобы можно было обрабатывать значения, которые не являются промисами. Так как это возможность
// есть в Promise.all

function myPromiseAll(promises) {
    const responses = [];

    return new Promise((resolve, reject)=> {
        promises.map((item, index)=> {
            item.then((data)=> {
                responses[index] = data;
                resolve(responses);
            }).catch(e => {
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

