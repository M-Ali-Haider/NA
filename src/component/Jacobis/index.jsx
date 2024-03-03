import React, { useState } from 'react';
import Generate from '../Generate';

function JacobiSolver({x,m,n,a,b,results,setResults,resetState}) {
    const solveEquations = () => {
        let y = [...x];
        let iterations = m;
        const tempResults = [];
        while (iterations > 0) {
            const iterationResult = {};
            iterationResult.iteration = m - iterations + 1;
            iterationResult.values = [];
            for (let i = 0; i < n; i++) {
                let sum = 0;
                for (let j = 0; j < n; j++) {
                    if (j !== i) {
                        sum += a[i][j] * x[j];
                    }
                }
                y[i] = (b[i] - sum) / a[i][i];
            }
            for (let i = 0; i < n; i++) {
                x[i] = y[i];
                iterationResult.values.push({ variable: `x${i + 1}`, value: y[i] });
            }
            tempResults.push(iterationResult);
            iterations--;
        }
        setResults(tempResults);
    };

    return (
        <div>
            <Generate solveEquations={solveEquations} resetState={resetState}/>
            <div className='resultsContainer'>
                <div className="headings">
                    <div>k</div>
                    {
                        [...Array(n)].map((_,i)=>{
                            return <div key={`bruh-${i}`}>x{i+1}</div>
                        })
                    }
                </div>
                <div className="bruh">
                    <div>0</div>
                    {
                        [...Array(n)].map((_,i)=>{
                            return <div key={`haha-${i}`}>0</div>
                        })
                    }
                </div>
                {results.map((result, index) => (
                    <div key={index} className='bruh'>
                        <div>{index+1}</div>
                        {result.values.map((value, idx) => (
                            <div key={idx}>{(value.value).toFixed(4)}</div>
                        ))}
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JacobiSolver;
