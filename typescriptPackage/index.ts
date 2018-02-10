const helloWorld = (x: string) => console.log('Hello world from typescript package ' + x );
const helloWorld2 = (x: Number) => console.log('hello world 2 ' + x);

export default {
    helloWorld,
    helloWorld2
}
export {
    helloWorld,
    helloWorld2
}