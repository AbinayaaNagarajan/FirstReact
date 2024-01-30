// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Welcome from './components/Welcome'
// import Image from './components/Image'
// import Person from './components/Person'
// import Container from './components/Container'

// // The parent is rendering the Child and passing the chesse prop
// const Parent = props => <Child cheese="gouda" />
// // The Child is receiving the cheese prop, and then rendering the GrandChild and passing the cheese prop as the "data" prop
// const Child = props => <GrandChild data={props.cheese} />
// // The GrandChild can then access the data prop that Child passed to it.
// const GrandChild = props => <h1>{props.data}</h1>


// function App() {
//   const personProps = {
//     name: "John Doe",
//     age: 150,
//     website: "johndoepershcolas.com",
//     image: reactLogo
//   }

//   return (
//     <>
//       <div>
//         <Image url="https://vitejs.dev" logo={viteLogo} />
//         <Image url="https://react.dev" alt="React logo" logo={reactLogo} />
//       </div>
//       <h1>Vite + React for 2023-108-RTT</h1>

//       {/* Every prop you pass, gets added to the props OBJECT as a key/value pair */}
//       <Welcome name="Abi" whateverValue="123" style={{color: "skyblue"}} />
//       {/* props = {
//         name: "Sara",
//         whateverValue: "123",
//         style: {
//           color: "skyblue"
//         }
//       } */}
//       <Welcome name="Nainikha" style={{color: "red"}} />

//       {/* Prop drilling example */}
//       <Parent />

//       {/* spread operator example  */}
//       <Person {...personProps}  />

//       {/* props.children example */}
//       <Container>
//         <p>I am a child of the Container Component </p>
//         <strong>Me too!</strong>
//       </Container>


//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;



