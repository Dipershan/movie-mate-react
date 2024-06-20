

const Table = ({header = [] ,  data =[]}) => {
  return (
    <>
    <table border={1}>
        <tr>
            {header.map((item) => (
                <th key={item}>{item}</th>
            ))}
        </tr>
        <tbody>
            {data.length >0 ?(
                data.map((car , index)=>{
                return (
                  <tr key={car?.name}  >
                    <td>{index+1}</td>
                    <td>{car?.name}</td>
                    <td>{car?.model}</td>
                  </tr>
                );
            })
    ) :(
            <tr>
                <td colSpan={3} style={{textALign:"center"}}>
                    No Data
                </td>

            </tr>
                    
    )}

        </tbody>
    </table>
</>
  )
}

export default Table