const helloWorld = () => console.log('Hello world from second package');
const helloWorld2 = () => console.log('hello world 2');

export default helloWorld;
export {
  helloWorld,
  helloWorld2
}