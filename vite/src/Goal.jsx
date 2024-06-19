

export const Goal = () => {

  //js function

  const shoot  = (data) =>{
    alert(`goal by ${data}`);
  };
  return (
    <div>
        <input placeholder='NAme'  type="text" name="" id="rod" />

        <select name="" id="siu" onChange = {()=> shoot(document.getElementById("siu").value)}>
        <option value="">Select </option>
            <option value="messi">Messi</option>
            <option value="ronaldo">Ronaldo</option>
        </select>
        <button onClick={()=>shoot(document.getElementById("siu").value)}>Goal</button>
    </div>
  )
}

export default Goal;
