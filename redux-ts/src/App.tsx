import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state'

function App() {
  const amount = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
        <h1>{amount}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(50)}>Withdraw</button>
    </div>
  );
}

export default App;
