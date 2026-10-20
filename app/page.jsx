import React from 'react'

const table = { borderCollapse: 'collapse', width: '100%' }
const cell = { border: '1px solid #000', padding: '5px 10px', textAlign: 'left' }


const Page = () => {
  const students1 = {
    first_year: "101",
    secondyear: "122",
    thirdyear: "96",
    fourthyear: "87",
  };

  return (
    <main style={{ padding: '32px' }}>
  <h2 style={{ marginTop: 0 }}>CEC Student Details</h2>

  <table style={table}>
    <tbody>
      <tr>
        <td style={cell}>First Year</td>
        <td style={cell}>{students1.first_year}</td>

      </tr>


      <tr>
        
      <td style={cell}>Second Year</td>
        <td style={cell}>{students1.secondyear}</td>
      </tr>


      <tr>
        <td style={cell}>Third Year</td>
        <td style={cell}>{students1.thirdyear}</td>
      </tr>

      <tr>


        
        <td style={cell}>Fourth Year</td>
        <td style={cell}>{students1.fourthyear}</td>
      </tr>
    </tbody>
  </table>
</main>
  );
};

export default Page;
