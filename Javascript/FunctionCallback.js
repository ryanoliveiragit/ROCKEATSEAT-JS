//calback function

function sayMyname(name) {
    console.log(name)
    name()
}

sayMyname(
    () => {
        console.log('estou em um callback')
    }
)