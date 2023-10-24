import ReUsableComponent from './ReUsableComponent';
// import Counter from './Counter';

function App() {

  let data = [
    {name: 'ANANTHU M A', email: 'ananthuma@gmail.com', color: 'skyblue'},
    {name: 'SRUTHI V V', email: 'sruthivv@gmail.com', color: 'pink'},
    {name: 'NAKUL V M', email: 'nakulvm@gmail.com', color: 'red'},
  ]

  return (
    <div>
      {
        data.map((obj, index)=>
          (
            <ReUsableComponent key = {index} {...obj} />
          )
        )
      }
    </div>
  );
}

export default App;
