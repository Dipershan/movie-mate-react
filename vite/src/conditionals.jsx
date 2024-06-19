// import Goal from "./Goal";


export const conditionals = () => {
//   return (
//     //syntax 1 using ternary operator 
    
//     <div>{player ? <GoalBy player{player}/> : < Missed/>  }</div>
//   )
return <div>{player && <GoalBy player={player} /> }</div>
}

export const Missed  =  () =>{
    return <>Missed GOals</>;
};

export const GoalBy  =  ({player}) =>{
    return <>Goal by {player}</>;
};

export default conditionals;